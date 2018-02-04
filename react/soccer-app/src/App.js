import React, { Component } from 'react';
import './App.css';
import TeamContainer from './TeamContainer'
import Navbar from './Navbar'

class App extends Component {

  state = {
    teams: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch("http://api.football-data.org/v1/competitions/445/teams", {
      headers: { 'X-Auth-Token': 'd0002fcd64be4d88b3af3b81fc7dd116' },
      dataType: 'json',
      type: 'GET',
    })
      .then(response => response.json())
      .then((response => this.setState({ teams: response.teams })))
  }

  handleInput = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  render() {
    return (
      <div>
      <Navbar />
      <TeamContainer teams={this.state.teams} searchTerm={this.state.searchTerm} handleInput={this.handleInput}/>
      </div>
    );
  }
}

export default App;
