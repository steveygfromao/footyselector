import React, {useState} from 'react'
import Player from './Player'

const PlayerDisplayTable = ({players}) => {

    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handleRowClick = (player) => {
   //     setSelectedPlayer(player);
    };

    const totalSkillsLevel = () => {
        let level = players.reduce((sum, item) => sum + item.skill, 0);
        return Math.round(level * 100) / 100;
    }

    return (
    <>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Skill</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player) => (
                    <tr key={player.id} onClick={() => handleRowClick(player)}>
                    <Player playerObj={player}/>
                    </tr>
                ))}
            </tbody>
        </table>
        <h5>Skill Level Total:{totalSkillsLevel()}</h5>
        {selectedPlayer && (
                   <div>
                       <h2>Selected Player Details</h2>
                       <p>Name: {selectedPlayer.name}</p>
                       <p>Skill: {selectedPlayer.skill}</p>
                   </div>
               )}
    </>
  )
}

export default PlayerDisplayTable
