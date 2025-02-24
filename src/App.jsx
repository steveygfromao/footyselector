
import './App.css'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import PlayerDisplayTable from './components/PlayerDisplayTable'
import playersList  from './models/players'

const App = () => {

  const PlayerAmount = playersList.length;
  const [playerTeamOne, setTeamOnePlayers] = useState([]);
  const [playerTeamTwo, setTeamTwoPlayers] = useState([]);

  useEffect(() => {
    recreateTeams();
  }, []);
  
  const createTeams = (players) => {
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }
   
    setTeamOnePlayers(players.slice(0, PlayerAmount/2));
    setTeamTwoPlayers(players.slice(PlayerAmount/2, PlayerAmount));

  }

  const recreateTeams = () => {
    createTeams([...playersList]);  // will do a refresh as stored in state
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
      <button class="button" onClick={recreateTeams}>Re-create</button>
      <Footer />
    </>
  );
}

export default App
