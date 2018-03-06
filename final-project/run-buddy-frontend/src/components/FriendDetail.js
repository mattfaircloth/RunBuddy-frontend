import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem, Icon, Button} from 'react-materialize'

class FriendDetail extends React.Component {

   render() {
    //console.log('Friend Detail Info', this.props.friend);
     return (
       <div >
         <Collapsible popout defaultActiveKey={1}>
             <CollapsibleItem header={this.props.friend.name} icon='add'>
               <div>{this.props.friend.email}</div>
               <div>{this.props.friend.phone}</div>

             </CollapsibleItem>
         </Collapsible>
       </div>
     )
   }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, actions)(FriendDetail);
