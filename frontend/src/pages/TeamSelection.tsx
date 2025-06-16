import React, { useState } from 'react'
import { Box, Card, Flex, Text, Button } from '@radix-ui/themes';

const TeamSelection = ({ players, setPlayers }: any) => {
  const [teamOne, setTeamOne]: any = useState([]);
  const [teamTwo, setTeamTwo]: any = useState([]);
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

  console.log({ teamOne, teamTwo, players })
  console.log(selectedArray.length)

  // new func, who should get the final player?

  return (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '100vh', gap: '10px' }}>
      <Box style={{ display: 'flex', gap: '10px' }}>
        <Card>
          <Text color="plum" weight="bold">Unpicked Players</Text>
          <Flex direction="column">
            {players.map(({ name }: { name: string }) => (
              <Text as="div" color="gray" size="2">
                {name}
              </Text>
            ))}
          </Flex>
        </Card>
        <Card asChild>
          <Box>
            <Text as="div" size="3" weight="bold" color="plum">
              Team 1
            </Text>
            <Flex direction="column">
              {teamOne.map(({ name }: { name: string }) => (
                <Text as="div" color="gray" size="2">
                  {name}
                </Text>
              ))}
            </Flex>
          </Box>
        </Card>
        <Card asChild>
          <Box>
            <Text as="div" size="3" weight="bold" color="plum">
              Team 2
            </Text>
            <Flex direction="column">
              {teamTwo.map(({ name }: { name: string }) => (
                <Text as="div" color="gray" size="2">
                  {name}
                </Text>
              ))}
            </Flex>
          </Box>
        </Card>
      </Box>
      <Button
        onClick={pickPlayerAtRandom}
        disabled={selectedArray.length < 2}
        color="plum"
      >
        Draw Player
      </Button>
    </Box>
  )
}

export default TeamSelection;
