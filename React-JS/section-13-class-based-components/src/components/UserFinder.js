import { Fragment, Component, useContext } from 'react';
import UsersContext from '../store/users-context';

import Users from './Users';
import classes from './UserFinder.module.css';



class UserFinder extends Component {
  static contextType = UsersContext

  constructor(){
    super()
    this.state = {
      filteredUsers: [], //Blank value when using context
      searchTerm: ''
    }
  }

  componentDidMount(){ // when the dom ran for the first time
    // Send http requests
    // No need if check -> run's only once

    this.setState({filteredUsers: this.context.users})
  }


  componentDidUpdate(prevProps, prevState){ // for updating when dom is loaded
    if(prevState.searchTerm !== this.state.searchTerm){
      console.log(this.context.users)
      this.setState({
        filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
      })
    }

  }

  searchChangeHandler(event){
    this.setState({searchTerm: event.target.value})
  }

  
  render(){
    console.log(this.context.users)
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }

};

export default UserFinder;