import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WhoIsPlaying from './pages/WhoIsPlaying';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WhoIsPlaying />} />
    </Routes>
  </BrowserRouter>
);

export default App;
