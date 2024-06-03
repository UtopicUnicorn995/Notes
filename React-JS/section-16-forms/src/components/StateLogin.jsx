import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didFocus, setDidFocus] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didFocus.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
    
  const passwordIsInvalid =
    didFocus.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleInputBlur(identifier) {
    setDidFocus((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleInputChange("email", e.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleInputChange("password", e.target.value)}
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
