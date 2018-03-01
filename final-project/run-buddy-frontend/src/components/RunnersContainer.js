import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import Runners from './Runners'

class RunnersContainer extends React.Component {

  state = {
    runners: [],
    searchTerm: ''
  }

  componentDidMount = () => {
    this.props.getAllUsers()
    .then(res => this.setState({ runners: res }))
  }

  handleInput = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  render() {
    return (
      <Runners runners={this.state.runners} searchTerm={this.state.searchTerm} handleInput={this.handleInput}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPosition: state.currentPosition,
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, actions)(RunnersContainer);
