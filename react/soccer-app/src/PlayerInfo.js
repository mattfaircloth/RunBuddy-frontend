import React from 'react'

const PlayerInfo = (props) => {

  return (
    <div>
      <h3>{props.player.name}</h3>
      <h4>{props.player.position}</h4>

    </div>
  )

}

export default PlayerInfo
