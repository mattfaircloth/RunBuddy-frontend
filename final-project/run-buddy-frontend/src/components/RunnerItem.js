import React from 'react'
import {Button, Icon, Collapsible, CollapsibleItem, Row, Col} from 'react-materialize'

class RunnerItem extends React.Component {

  render() {

    let fof = this.props.runner.friends.map(friend => friend)

    console.log(fof);
    return (
      <div >
        <Collapsible className='collap' popout defaultActiveKey={1}>
            <CollapsibleItem header={this.props.runner.name} icon='add'>
              <h5>Info: </h5>
              <div>{this.props.runner.email}</div>
              <div>{this.props.runner.phone}</div>
              <h5>Friends: {this.props.runner.friends.length}</h5>
              {fof.map(friend => <div key={friend.id}>{friend.name}</div>)}
              <div></div>
              <Row>
                <Col s={6}>
                  <Button className='profile-button' id={this.props.runner.id} waves='light' onClick={this.props.addFriend}>Add Friend<Icon left>check</Icon></Button>
                </Col>
                <Col s={6}>
                  <Button className='profile-button' id={this.props.runner.id} waves='light' onClick={this.props.removeFriend}>Remove Friend<Icon left>close</Icon></Button>
                </Col>
              </Row>
            </CollapsibleItem>
        </Collapsible>
      </div>
    )
  }
}



export default RunnerItem
