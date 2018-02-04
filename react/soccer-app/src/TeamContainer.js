import React from 'react'
import TeamItem from './TeamItem'


class TeamContainer extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    let allTeams;
    if (this.props.searchTerm !== '') {
    let filteredTeams = this.props.teams.filter(team => team.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      allTeams = filteredTeams.map(team => <TeamItem team={team} key={team.name}/>)
    } else {
      allTeams = this.props.teams.map(team => <TeamItem team={team} key={team.name}/>)
    }

    return (
      <div>
        <form className='search-bar'>
          <input type='search' placeholder='Search for a Team' onChange={this.props.handleInput}></input>
        </form>
        {allTeams}
      </div>
    )
  }
}

export default TeamContainer
