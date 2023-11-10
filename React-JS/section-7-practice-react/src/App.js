import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Table from "./components/Table";

function App() {
  const [userInput, setUserInput] = useState(null);
  //const yearlyData = []; // per-year results

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if(userInput){
    console.log(userInput)
    
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
  
    console.log(expectedReturn, duration)
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
     
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  
  console.log(yearlyData)

  return (
    <div>
      <Header />
      <InputForm onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput  ? <p>shit</p> : <Table data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
