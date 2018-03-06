import React from 'react'
import {Button, Icon, Collapsible, CollapsibleItem} from 'react-materialize'

class RunnerItem extends React.Component {

  render() {
    return (
      <div >
        <Collapsible popout defaultActiveKey={1}>
            <CollapsibleItem header={this.props.runner.name} icon='add'>
              <div>{this.props.runner.email}</div>
              <div>{this.props.runner.phone}</div>
              <div>
                <Button className='profile-button' id={this.props.runner.user_id} waves='light' onClick={this.props.addFriend}>Add Friend<Icon left>check</Icon></Button>
              </div>
              <div>
                <Button className='profile-button' id={this.props.runner.user_id} waves='light' onClick={this.props.removeFriend}>Remove Friend<Icon left>close</Icon></Button>
              </div>
            </CollapsibleItem>
        </Collapsible>
      </div>
    )
  }
}



export default RunnerItem
