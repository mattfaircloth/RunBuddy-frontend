import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import NavBar from './NavBar'
import config from '../config'
import {Row, Col} from 'react-materialize'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  responseFacebook = (response) => {
    console.log(response);
    const history = this.props.history
    this.props.loginUser(response, history);
    history.push("/home");
  }

  handleLoginChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    const history = this.props.history
    this.props.loginManualUser(this.state.username, this.state.password, history)
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
            <h3>Sign In!</h3>
            <Row>
              <Col s={4}></Col>
              <Col s={6}>
                <form className='signin' onSubmit={this.handleForm}>
                  <input  type='text' name='username' placeholder='Username' onChange={this.handleLoginChange}></input>
                  <input  type='password' name='password' placeholder='Password' onChange={this.handleLoginChange}></input>
                  <input type='submit' value='Sign In' onClick={this.handleLogin}></input>
                </form>
              </Col>
              <Col s={2}></Col>

            </Row>

          </div>
          <h4>OR</h4>
        <FacebookLogin socialId={config.FACEBOOK_KEY}
                               className="facebook-login-button"
                               language="en_US"
                               scope="public_profile,email,user_friends"
                               responseHandler={this.responseFacebook}
                               xfbml={true}
                               fields="id,email,name,picture.height(480),friends"
                               version="v2.12"
                               buttonText="Login With Facebook" />
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), actions)(Login);
