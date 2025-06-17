import '../components/styles/who-is-playing.css';
import Selector from '../components/ui/Selector';

const WhoIsPlaying = ({ setPlayers }: { setPlayers: any }) => {
  return (
    <Selector setPlayers={setPlayers} />
  )
};

export default WhoIsPlaying;