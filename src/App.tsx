import React from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import PlayersTable from './components/PlayersTable/PlayersTable';
import TeamInput from './components/TeamInput/TeamInput';

function App() {
  return (
    <div className="App container-xl mt-5">
      <h1 className='fw-bolder'>NBA profile</h1>
      <TeamInput />
      <PlayersTable />
      <PlayersList />
    </div>
  );
}

export default App;
