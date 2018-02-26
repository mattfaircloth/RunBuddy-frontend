import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import NavBar from './NavBar'
import config from '../config'

class Login extends React.Component {

  responseFacebook = (response) => {
    console.log(response);
    const history = this.props.history
    this.props.loginUser(response, history);
    history.push("/home");
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
            <form>
              <input placeholder="Username"></input>
              <input placeholder="Password"></input>
            </form>
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
