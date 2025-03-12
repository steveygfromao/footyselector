
import './App.css'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import PlayerDisplayTable from './components/PlayerDisplayTable'
import playersList  from './models/players'

const App = () => {

  const SKILL_THRESHOLD = 0.4;
  const PlayerAmount = playersList.length;
  const [playerTeamOne, setTeamOnePlayers] = useState([]);
  const [playerTeamTwo, setTeamTwoPlayers] = useState([]);
  const [skillsDiff, setSkillsDiff] = useState(0);
  let totalStrikers = 0;
  let totalDefenders = 0;

  useEffect(() => {
    recreateTeams();
  }, []);
  
  const createTeams = async (players) => {
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }
   
    totalStrikers = playersList.filter(player => player.position === 'Striker');
    totalStrikers = Math.ceil(totalStrikers.length / 2);
    totalDefenders = playersList.filter(player => player.position === 'Defence');
    totalDefenders = Math.ceil(totalDefenders.length / 2);

    let team1 = players.slice(0, PlayerAmount/2);
    let team2 = players.slice(PlayerAmount/2, PlayerAmount);
  
    // If skills difference is greater than skills threshold, we will roll for teams again
    calculateSkillsDifference(team1, team2)
    .then((result) => {
   //   if(!CheckPlayersOnSameTeam(team1,team2, "Mark", "Oliver"))
    //    recreateTeams();
     // else  {
        if(result > SKILL_THRESHOLD || checkPlayerPosition(team1,"Defence", totalDefenders) || checkPlayerPosition(team2, "Defence", totalDefenders) || checkPlayerPosition(team1,"Striker", totalStrikers) || checkPlayerPosition(team2,"Striker", totalStrikers)) {
          recreateTeams();
        }
        else {
          setSkillsDiff(result);
          setTeamOnePlayers(team1);
          setTeamTwoPlayers(team2);
        }
        //}
    })
    .catch((error)=> {
      console.error('Error:',error);
    })
  }

  const calculateSkillsDifference = async (teamOne, teamTwo) => {
    const result = await skillsDifference(teamOne, teamTwo);
    return result;
  }

  const skillsDifference = async (teamOne, teamTwo) => {
    return new Promise((resolve) => {
      let teamOneLevel = teamOne.reduce((sum, item) => sum + item.skill, 0);
      teamOneLevel = Math.round(teamOneLevel * 100) / 100;
      let teamTwoLevel = teamTwo.reduce((sum, item) => sum + item.skill, 0);
      teamTwoLevel = Math.round(teamTwoLevel * 100) / 100;
      let skillDiff = teamOneLevel > teamTwoLevel ? teamOneLevel - teamTwoLevel : teamTwoLevel - teamOneLevel;
      skillDiff = Math.round(skillDiff * 100) / 100;
      resolve(skillDiff);
    });
  }

  const checkPlayerPosition = (team, position, max) =>{
    const positions = team.filter(player => player.position === position);
    return positions.length > max;
  }

  const CheckPlayersOnSameTeam = (team1, team2, playerName1, playerName2 ) => {
    // Check if both player names exist in the players list
    let a = (team1.some( p=>p.name==playerName1) && team1.some(p=>p.name==playerName2) ) ||
       (team2.some( p=>p.name==playerName1) && team2.some(p=>p.name==playerName2) ) ;

       console.log("Exists:" + a);
       return a;
  }


  const recreateTeams = () => {
    createTeams([...playersList]);  
  };

  return (
    <>
      <h2>Team Selector</h2>
      <div>
       
          <PlayerDisplayTable players={playerTeamOne} />
         
          <PlayerDisplayTable players={playerTeamTwo} />
      </div>
      <h5>Skills difference:{skillsDiff}</h5>
      <button className="button" onClick={recreateTeams}>Re-create</button>
     {/* <Footer /> */}
    </>
  );
}

export default App
