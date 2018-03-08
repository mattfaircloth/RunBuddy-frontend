import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem, Icon, Button} from 'react-materialize'

class FriendDetail extends React.Component {

   render() {
    //console.log('Friend Detail Info', this.props.friend.friends.length);

    // <h5>Friends: {this.props.runner.friends.length}</h5>
    // {fof.map(friend => <div key={friend.id}>{friend.name}</div>)}

     let friends

     if (this.props.friend.friends !== undefined) {
       friends = <div><h5>Friends: {this.props.friend.friends.length}</h5>
       <ul>{this.props.friend.friends.map(friend => <li key={friend.id}>{friend.name}</li>)}</ul></div>
      } else {
        <div></div>
      }

     return (
       <div >
         <Collapsible popout defaultActiveKey={1}>
             <CollapsibleItem header={this.props.friend.name} icon='perm_identity'>
               <div>{this.props.friend.email}</div>
               <div>{this.props.friend.phone}</div><br></br>
               {friends}

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
