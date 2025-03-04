import React from 'react'

const PlayerCard = ({player}) => {

  if(!player) return null;

  return (
    <div className='card'>
        
        <h3>{player.name}</h3>
        <p><strong>Position:</strong> {player.position}</p>
       
    </div>
  )
}
  
export default PlayerCard
