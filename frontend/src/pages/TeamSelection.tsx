import { useEffect, useState } from 'react'
import { Box, Flex, Text, Button } from '@radix-ui/themes';
import '../components/styles/team-selection.css';

const TeamSelection = ({ players }: any) => {
  const [teamOne, setTeamOne]: any = useState([]);
  const [teamTwo, setTeamTwo]: any = useState([]);
  const [teamOneSelected, setTeamOneSelected] = useState(true);

  const generateTeams = () => {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    const halfLength = Math.ceil(shuffledPlayers.length / 2);
    const mappedPlayers = shuffledPlayers.map((player, index) => ({
      ...player,
      anonName: `Player ${index + 1}`,
      isAnon: true
    }))
    setTeamOne(mappedPlayers.slice(0, halfLength));
    setTeamTwo(mappedPlayers.slice(halfLength));
  }

  const handleDraw = () => {
    if (teamOneSelected) {
      const findPlayer = teamOne.find((player: any) => player.isAnon);
      console.log({ findPlayer });
      setTeamOne((prev: any[]) =>
        prev.map((player) =>
          player.anonName === findPlayer.anonName
            ? { ...player, isAnon: false }
            : player
        )
      );
      setTeamOneSelected(false);
    } else {
      const findPlayer = teamTwo.find((player: any) => player.isAnon);
      console.log({ findPlayer });
      setTeamTwo((prev: any[]) =>
        prev.map((player) =>
          player.anonName === findPlayer.anonName
            ? { ...player, isAnon: false }
            : player
        )
      );
      setTeamOneSelected(true);
    }
  }
  
  useEffect(() => {
    generateTeams();
  }, [])

  if (players.length === 0 && teamOne.length === 0) return (
    <div>
      Please select players
    </div>
  );

  return (
    <Flex height="100vh" justify="center" align="center" direction="column" gap="20px">
      <Box 
        style={{ background: '#010e38', borderRadius: '10px', border: '1px solid white', display: 'flex', flexDirection: 'column', gap: '30px' }} 
        p="20px"
      >
        <Box style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src="/assets/cl.png" height="90px" />
          <Flex direction="column" align="center" gap="2">
            <Text size="6" weight="bold">EV CHAMPIONS LEAGUE</Text>
            <Text size="3" weight="bold">GENERATED TEAMS</Text>
          </Flex>
        </Box>
        <Box>
          <Text size="3" weight="bold">TEAM 1</Text>
          {teamOne.map((player: any) => (
            <Box style={{ background: '#06174d', borderRadius: '5px', padding: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
              <Flex direction="column" gap="1">
                <Text size="3" weight="bold">{player.isAnon ? player.anonName : player.name}</Text>
              </Flex>
            </Box>
          ))}
        </Box>
        <Box>
          <Text size="3" weight="bold">TEAM 2</Text>
          {teamTwo.map((player: any) => (
            <Box style={{ background: '#06174d', borderRadius: '5px', padding: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
              <Flex direction="column" gap="1">
                <Text size="3" weight="bold">{player.isAnon ? player.anonName : player.name}</Text>
              </Flex>
            </Box>
          ))}
        </Box>
        <Button style={{ width: '50%', margin: '0 auto', cursor: 'pointer' }} variant="soft" color="iris" onClick={handleDraw}>
          Draw
        </Button>
      </Box>
    </Flex>
  );
}

export default TeamSelection;
