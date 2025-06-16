import { useState, useRef, useEffect } from 'react'
import { Box, Card, Flex, Text, Button } from '@radix-ui/themes';
import '../components/styles/team-selection.css';

const TeamSelection = ({ players, setPlayers }: any) => {
  const [teamOne, setTeamOne]: any = useState([]);
  const [teamTwo, setTeamTwo]: any = useState([]);
  const [playerLength] = useState(players.length);
  const [isTeamOne, setIsTeamOne] = useState(true);

  const isEven = players.length % 2 === 0;
  const formatPlayers = isEven ? players : { evenedPlayers: players.slice(0, players.length - 1), extraPlayer: players[players.length - 1] };
  const selectedArray = formatPlayers.evenedPlayers || players;

  const pickPlayerAtRandom = () => {
    const randomPlayer = Math.floor(Math.random() * selectedArray.length);
    isTeamOne ? setTeamOne((prev: any) => [...prev, players[randomPlayer]]) : setTeamTwo((prev: any) => [...prev, players[randomPlayer]]);
    setPlayers(players.filter((_: never, idx: number) => idx !== randomPlayer));
    setIsTeamOne(!isTeamOne)
  }

  const cardRef = useRef<HTMLDivElement>(null);
  const [lockedHeight, setLockedHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (cardRef.current && lockedHeight === undefined) {
      setLockedHeight(cardRef.current.offsetHeight);
    }
  }, [lockedHeight]);

  // new func, who should get the final player?

  if (players.length === 0 && teamOne.length === 0) return (
    <div>
      No players found
    </div>
  );

  return (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '100vh', gap: '10px' }}>
      <Box style={{ display: 'flex', gap: '10px' }}>
        {players.length > 0 && (
          <Card ref={cardRef} style={{ height: lockedHeight }}>
            <Text color="plum" weight="bold">Unpicked Players</Text>
            <Flex direction="column">
              {players.map(({ name }: { name: string }) => (
                <Text as="div" color="gray" size="2" weight="medium">
                  {name}
                </Text>
              ))}
            </Flex>
          </Card>
        )}
        <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box m="3">
            <Text as="div" size="5" weight="bold" color="plum" mb="1">
              🚀 Team 1 ({teamOne.length})
            </Text>
            <Flex direction="column" gap="1">
              {teamOne.map(({ name }: { name: string }) => (
                <Text as="div" color="gray" size="4" weight="regular" className='text-animation'>
                  {name}
                </Text>
              ))}
            </Flex>
            <Text color="gray">————————————</Text>
            <Text as="div" size="5" weight="bold" color="plum" mb="1">
              🤖 Team 2 ({teamTwo.length})
            </Text>
            <Flex direction="column" gap="1">
              {teamTwo.map(({ name }: { name: string }) => (
                <Text as="div" color="gray" size="4" weight="regular" className='text-animation'>
                  {name}
                </Text>
              ))}
            </Flex>
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Text size="1" weight="medium" color="gray">
              Copy as a message ⬆️
            </Text>
          </Box>
        </Card>
      </Box>
      <Button
        onClick={pickPlayerAtRandom}
        disabled={teamOne.length + teamTwo.length >= playerLength}
        color="plum"
      >
        Draw Player
      </Button>
    </Box>
  )
}

export default TeamSelection;
