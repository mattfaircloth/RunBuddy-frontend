import React from 'react'
import TeamDetail from './TeamDetail'



class TeamItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      detailsDisplayed: false,
      players: []
    }
  }



  handleTeamClick = (event) => {
    event.preventDefault();
    this.setState(previousState => {
      return {
        detailsDisplayed: !previousState.detailsDisplayed
      }
    })
  }


  componentDidMount() {
    const playersUrl = this.props.team._links.players.href

    fetch(`${playersUrl}`, {
      headers: { 'X-Auth-Token': 'd0002fcd64be4d88b3af3b81fc7dd116' },
      dataType: 'json',
      type: 'GET',
    })
      .then(response => response.json())
      .then((response => this.setState({ players: response.players })))

  }


  render() {
    let showDetails;
    if (this.state.detailsDisplayed === true) {
      showDetails = <TeamDetail players={this.state.players}/>
    } else {
      showDetails = <div><p></p></div>
    }


    return (
      <div className='teamTile'>
        <h3 onClick={this.handleTeamClick}>{this.props.team.name}</h3>
        <img className='team-image' src={this.props.team.crestUrl} alt=''/>
        <div>
          {showDetails}
        </div>
      </div>
    )
  }

}

export default TeamItem
