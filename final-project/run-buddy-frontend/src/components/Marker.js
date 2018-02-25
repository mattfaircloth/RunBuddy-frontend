import React from 'react';


class Marker extends React.Component {

  render() {
    return (
      <div>

        <img className="runner-icon" src="/runner.jpg" alt="runner" name={this.props.marker[0].address} onClick={this.props.handleMarkerClick}/>
      </div>
    );
  }
}


export default Marker;
