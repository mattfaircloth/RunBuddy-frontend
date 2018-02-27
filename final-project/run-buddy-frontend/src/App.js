import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import RunBuddyContainer from './components/RunBuddyContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route path="/runbuddy" component={RunBuddyContainer} />
      </div>
    );
  }
}

export default App;
