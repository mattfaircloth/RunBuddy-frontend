import React from 'react'
import {Button, Icon, Collapsible, CollapsibleItem} from 'react-materialize'

class Runners extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div >
        <Collapsible popout defaultActiveKey={1}>
            <CollapsibleItem header={this.props.runner.name} icon='add'>
              <div>{this.props.runner.email}</div>
              <div>{this.props.runner.phone}</div>
              <div>
                <Button waves='light' onClick={this.joinWorkout}>Add Friend<Icon left>check</Icon></Button>
              </div>
            </CollapsibleItem>
        </Collapsible>
      </div>
    )
  }
}



export default Runners
