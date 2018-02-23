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
          Find Friends to Run With!
        </div>
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
    );
  }
}

export default connect(() => ({}), actions)(Login);
