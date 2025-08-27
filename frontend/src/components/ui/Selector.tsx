/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Box, Flex, Checkbox, Text, ScrollArea, Button } from '@radix-ui/themes';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import playerData from '../../../players.json';
import Header from './Header';

const Selector = ({ setPlayers }: { setPlayers: any }) => {
  const navigate = useNavigate();
  const [playerAmount, setPlayerAmount] = useState(0);

  const mappedPlayerData = playerData.players.map((player) => ({
    ...player,
    isPlaying: false
  }));

  const handleSubmit = (values: any) => {
    const players = values.players.filter(({ isPlaying }: { isPlaying: boolean }) => isPlaying);
    setPlayers(players);
    navigate('team-selection');
  };

  return (
    <Flex height="100vh" justify="center" align="center">
      <Box 
        style={{ background: '#010e38', borderRadius: '10px', border: '1px solid white', display: 'flex', flexDirection: 'column', gap: '30px' }} 
        p="20px"
      >
        <Header hideHeader={false} subMessage="TEAM SELECTION" />
        <Box>
          <Text weight="bold">SELECT PLAYERS</Text>
          <Formik
            initialValues={{ players: mappedPlayerData }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ values, setFieldValue }) => (
              <Form style={{ width: '100%', marginTop: '10px' }}>
                <ScrollArea type="scroll" scrollbars="vertical" style={{ height: 450 }}>
                  {values.players.map((player, idx) => (
                    <Box style={{ background: '#06174d', borderRadius: '5px', padding: '7px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                      <Flex direction="column" gap="1">
                        <Text size="3" weight="bold">{player.name} - {player.rating}</Text>
                        <Text size="2" weight="medium">{player.position}</Text>
                      </Flex>
                      <Checkbox
                        checked={player.isPlaying}
                        color="iris"
                        variant="surface"
                        name={`players[${idx}].isPlaying`}
                        size="3"
                        onCheckedChange={(checked) => {
                          setFieldValue(`players[${idx}].isPlaying`, checked)
                          setPlayerAmount((prev) => checked ? prev + 1 : prev - 1)
                        }}
                      />
                    </Box>
                  ))}
                </ScrollArea>
                <Flex justify="between" mt="2" align="center">
                  <Text weight="bold">Selected: {playerAmount}/{mappedPlayerData.length}</Text>
                  <Button variant="soft" color="iris" type="submit">
                    Next
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>        
      </Box>
    </Flex>
  )
}

export default Selector;
