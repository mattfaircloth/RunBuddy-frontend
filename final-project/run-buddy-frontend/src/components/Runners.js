import React from 'react'
import RunnerItem from './RunnerItem'



class Runners extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let allRunners;
    if (this.props.searchTerm !== '') {
    let filteredRunners = this.props.runners.filter(runner => runner.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      allRunners = filteredRunners.map(runner => <h5 key={runner.id} className='runnerTile'>{runner.name}</h5>)
    } else {
      allRunners = this.props.runners.map(runner => <h5 key={runner.name} className='runnerTile'>{runner.name}</h5>)
    }

    return (
      <div>
        <form className='search-bar'>
          <input type='search' placeholder='Search for a Runner' onChange={this.props.handleInput}></input>
        </form>
        <h3>Runners:</h3>
        {allRunners}
      </div>
    )
  }
}

export default Runners
