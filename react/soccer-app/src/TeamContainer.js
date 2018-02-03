import React from 'react'
import TeamItem from './TeamItem'


class TeamContainer extends React.Component {


  render() {
    let allTeams = this.props.teams.map(team => <TeamItem team={team} key={team.name}/>)
    return (
      <div>
        {allTeams}
      </div>
    )
  }
}

export default TeamContainer
