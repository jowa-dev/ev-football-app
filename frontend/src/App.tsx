import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WhoIsPlaying from './pages/WhoIsPlaying';
import TeamSelection from './pages/TeamSelection';

const App = () => {
  const [players, setPlayers] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhoIsPlaying setPlayers={setPlayers} />} />
        <Route path="/team-selection" element={<TeamSelection players={players} setPlayers={setPlayers} />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
