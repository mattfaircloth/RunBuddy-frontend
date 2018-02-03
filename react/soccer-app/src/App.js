import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamContainer from './TeamContainer'
import Navbar from './Navbar'

class App extends Component {

  state = {
    teams: []
  }

  componentDidMount() {
    fetch("http://api.football-data.org/v1/competitions/445/teams", {
      headers: { 'X-Auth-Token': 'd0002fcd64be4d88b3af3b81fc7dd116' },
      dataType: 'json',
      type: 'GET',
    })
      .then(response => response.json())
      .then((response => this.setState({ teams: response.teams })))
        //

  }
  render() {
    return (
      <div>
      <Navbar />
      <TeamContainer teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
