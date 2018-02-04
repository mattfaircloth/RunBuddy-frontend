import React from 'react';
import PlayerInfo from './PlayerInfo';

class TeamDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      infoDisplayed: false,
      player: ''
    }
  }

  handlePlayerClick = (event) => {
    //debugger
    event.preventDefault();
    this.setState(previousState => {
      return {
        infoDisplayed: !previousState.infoDisplayed
      }
    })
  }

  // selectPlayer = (event) => {
  //   this.setState({
  //     player: event.target.id
  //   })
  // }

  //onClick={this.handlePlayerClick} onClick={this.selectPlayer}

  render() {
    let infoDetails = this.props.players.map(player =>  <div className='playerTile' key={player.name}>
      <h3 className='player-name' id={player.name}>Name: {player.name}</h3>
      <h4>Position: {player.position}</h4>
      <h4>Nationality:{player.nationality}</h4>
      </div>)

    console.log(this.state)
    let playerDetails;
    // if (this.state.infoDisplayed === true) {
    //   playerDetails = <PlayerInfo player={this.state.player}/>
    // } else {
    //   playerDetails = <div><p></p></div>
    // }

    return (
      <div>
      {infoDetails}
      <div>
      {playerDetails}
      </div>
      </div>
    )
  }
}

export default TeamDetail
