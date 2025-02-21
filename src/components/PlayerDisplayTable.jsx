import React from 'react'
import Player from './Player'

const PlayerDisplayTable = ({players}) => {

    const totalSkillsLevel = () => {
        return players.reduce((sum, item) => sum + item.skill, 0);
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
                    <tr key={player.id}>
                    <Player playerObj={player}/>
                    </tr>
                ))}
            </tbody>
        </table>
        <h3>Skill Level Total:{totalSkillsLevel()}</h3>
    </>
  )
}

export default PlayerDisplayTable
