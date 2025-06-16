import { useState } from 'react';
import '../components/styles/who-is-playing.css';
import { Formik, Form } from 'formik';
import { Button, Card, Flex, Checkbox, Box, ScrollArea, Text } from '@radix-ui/themes';
import playerData from '../../players.json';
import { useNavigate } from 'react-router-dom';

const WhoIsPlaying = ({ setPlayers }: { setPlayers: any }) => {
  const [playerAmount, setPlayerAmount] = useState(0);
  const navigate = useNavigate();

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
    <div className="main-container">
      <div className="header">
        <h1>Who is playing?</h1>
      </div>
      <Formik
        initialValues={{ players: mappedPlayerData }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, setFieldValue }) => (
          <Form style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box width={{ initial: '85%', xs: '80%', sm: '60%', md: '50%', lg: '30%', xl: '30%' }}>
              <Card>
                <ScrollArea type="always" scrollbars="vertical" style={{ height: 450 }}>
                  <Box pr="3">
                    {values.players.map((player, idx) => (
                      <Card key={player.name} style={{ margin: 10 }}>
                        <Flex gap="10px" align="center" justify="between">
                          <Flex direction="column">
                            <Text size="2" color="plum" weight="medium">{player.name}</Text>
                            <Text size="2" color="gray" weight="medium">{player.position}</Text>
                          </Flex>
                          <Checkbox
                            checked={player.isPlaying}
                            color="plum"
                            variant="surface"
                            name={`players[${idx}].isPlaying`}
                            size="3"
                            onCheckedChange={(checked) => {
                              setFieldValue(`players[${idx}].isPlaying`, checked)
                              setPlayerAmount((prev) => checked ? prev + 1 : prev - 1)
                            }}
                          />
                        </Flex>
                      </Card>
                    ))}
                  </Box>
                </ScrollArea>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                  <Text size="2" color="pink" weight="medium">Selected Players: {playerAmount}</Text>
                  <Button variant="surface" color="plum" type="submit">
                    Next
                  </Button>
                </Box>
              </Card>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default WhoIsPlaying;