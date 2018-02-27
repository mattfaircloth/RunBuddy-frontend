import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import NavBar from './NavBar'
import config from '../config'

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    name: '',
    email: '',
    phone: ''
  }

  handleSignUpChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignUp = (event) => {
    event.preventDefault();
    const history = this.props.history
    this.props.signUp(this.state.username, this.state.password, this.state.name, this.state.email, this.state.phone, history)
  }

  handleForm = (event) => {
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <NavBar />
        <div>

        </div>
        <div>
          <div>
            <h3>Sign Up!</h3>
            <form onSubmit={this.handleForm}>
              <input type='text' name='username' placeholder='Username' onChange={this.handleSignUpChange}></input>
              <input type='password' name='password' placeholder='Password' onChange={this.handleSignUpChange}></input>
              <input type='text' name='name' placeholder='Name' onChange={this.handleSignUpChange}></input>
              <input type='email' name='email' placeholder='Email' onChange={this.handleSignUpChange}></input>
              <input type='text' name='phone' placeholder='Phone Number' onChange={this.handleSignUpChange}></input>
              <input type='submit' value='Sign Up' onClick={this.handleSignUp}></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), actions)(SignUp);
