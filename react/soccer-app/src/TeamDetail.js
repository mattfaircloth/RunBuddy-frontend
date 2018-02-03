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
    event.preventDefault();
    this.setState(previousState => {
      return {
        infoDisplayed: !previousState.infoDisplayed,
        player: event.target.innerText
      }
    })
  }

  render() {
    // let infoDetails;
    // console.log(this.state)
    // if (this.state.infoDisplayed === true) {
    //   infoDetails = <PlayerInfo player={this.state.player}/>
    // } else {
    //   infoDetails = <p>See Player Info</p>
    // }

    let eachPlayer = this.props.players.map(player => <div>
      <ul>
      <li className='player-name' onClick={this.handlePlayerClick}>{player.name}</li>
      </ul>
      </div>)

    return (
      <div>
        {eachPlayer}
      </div>
    )

  }

}

export default TeamDetail
