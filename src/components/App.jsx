
import './App.css'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import PlayerDisplayTable from './components/PlayerDisplayTable'
import playersList  from './models/players'

const App = () => {

  const SKILL_THRESHOLD = 3;
  const PlayerAmount = playersList.length;
  const [playerTeamOne, setTeamOnePlayers] = useState([]);
  const [playerTeamTwo, setTeamTwoPlayers] = useState([]);
  const [skillsDiff, setSkillsDiff] = useState(0);

  useEffect(() => {
    recreateTeams();
  }, []);
  
  const createTeams = (players) => {
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }
   
    let team1 = players.slice(0, PlayerAmount/2);
    let team2 = players.slice(PlayerAmount/2, PlayerAmount);
  
    // If skills difference is greater than skills threshold, we will roll for teams again
    if(skillsDifference(team1, team2) > SKILL_THRESHOLD) {
      recreateTeams();
    } else {
      setTeamOnePlayers(team1);
      setTeamTwoPlayers(team2);
    }
  }

  const skillsDifference = (teamOne, teamTwo) => {

    let teamOneLevel = teamOne.reduce((sum, item) => sum + item.skill, 0);
    teamOneLevel = Math.round(teamOneLevel * 100) / 100;

    let teamTwoLevel = teamTwo.reduce((sum, item) => sum + item.skill, 0);
    teamTwoLevel = Math.round(teamTwoLevel * 100) / 100;

    let skillDiff = teamOneLevel > teamTwoLevel ? teamOneLevel - teamTwoLevel : teamTwoLevel - teamOneLevel;
    skillDiff = Math.round(skillDiff * 100) / 100;
    
    setSkillsDiff(skillDiff);
    
    return skillDiff;
  }

  const recreateTeams = () => {
    createTeams([...playersList]);  
  };

  return (
    <>
      <h1>Team Selector</h1>
      <div>
          <h2>Team 1</h2>
          <PlayerDisplayTable players={playerTeamOne} />
          <h2>Team 2</h2>
          <PlayerDisplayTable players={playerTeamTwo} />
      </div>
      <h4>Skills difference:{skillsDiff}</h4>
      <button className="button" onClick={recreateTeams}>Re-create</button>
      <Footer />
    </>
  );
}

export default App
