import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class Logout extends React.Component {

  handleLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <div onClick={this.handleLogout}>Log Out</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, actions)(Logout));
