
import './App.css'
import PlayerDisplayTable from './components/PlayerDisplayTable'
import playersList  from './models/players'

const App = () => {

  const PlayerAmount = playersList.length;

  const createTeams = (players) => {
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }
    return players;
  }

  const shuffledPlayers = createTeams([...playersList]);
  const team1 = shuffledPlayers.slice(0, PlayerAmount/2);
  const team2 = shuffledPlayers.slice(PlayerAmount/2, PlayerAmount);
  
  return (
    <>
      <h1>Football Team Selector</h1>
      <div>
          <h2>Team 1</h2>
          <PlayerDisplayTable players={team1} />
          <h2>Team 2</h2>
          <PlayerDisplayTable players={team2} />
      </div>
    </>
  );
}

export default App
