import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WhoIsPlaying from './pages/WhoIsPlaying';

const App = () => {
  const [players, setPlayers] = useState([]);
  console.log(players);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhoIsPlaying setPlayers={setPlayers} />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
