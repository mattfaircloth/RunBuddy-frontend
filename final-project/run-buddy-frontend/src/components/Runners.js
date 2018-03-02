import React from 'react'
import RunnerItem from './RunnerItem'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { withRouter } from 'react-router'

class Runners extends React.Component {

  addFriend = (e) => {
      const friend = this.props.runners.filter(runner => runner.user_id === e.currentTarget.id)
      const currentUser = this.props.currentUser
      const data = {user_id: currentUser.id, friend_id: parseInt(friend[0].user_id)}
      console.log('_____')
      console.log(data)
      this.props.postUserFriend(data, friend[0])
      this.props.history.push(`/runbuddy/workouts`)
   }

   removeFriend = (e) => {
     const friend = this.props.runners.filter(runner => runner.user_id === e.currentTarget.id)
     const currentUser = this.props.currentUser
     const userFriend = currentUser.user_friends.find(uf => parseInt(friend[0].user_id) === uf.friend_id)
     const userFriendId = userFriend.id
     console.log('user friend id', userFriendId)

     this.props.deleteUserFriend(userFriendId, parseInt(friend[0].user_id))
     this.props.history.push(`/runbuddy/workouts`)
    }


  render() {
    let otherRunners = this.props.runners.filter(runner => parseInt(runner.user_id) !== this.props.currentUser.id)
    let allRunners;
    if (this.props.searchTerm !== '') {
    let filteredRunners = otherRunners.filter(runner => runner.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      allRunners = filteredRunners.map(runner => <RunnerItem key={runner.user_id}  runner={runner} addFriend={this.addFriend} removeFriend={this.removeFriend}/>)
    } else {
      allRunners = otherRunners.map(runner => <RunnerItem key={runner.user_id} runner={runner} addFriend={this.addFriend}removeFriend={this.removeFriend}/>)
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

const mapStateToProps = state => {
  return {
    currentPosition: state.currentPosition,
    currentUser: state.currentUser,
  }
}

export default withRouter(connect(mapStateToProps, actions)(Runners));
