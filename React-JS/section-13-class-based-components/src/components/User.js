import {Component} from 'react'
import classes from "./User.module.css";


class User extends Component {
  componentWillUnmount(){
    console.log('user will unmount')
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } // Render is a specific method by react which react will call when it finds a component being used in JSXcode
  //to find what will be showned in the screen
}

// const User = (props) => {
// return <li className={classes.user}>{this.props.name}</li>;
// };

export default User;
