import { useState } from 'react';
import '../components/styles/who-is-playing.css';
import { Formik, Field, Form } from 'formik';
import { Button, Card, Flex, Checkbox, Box, ScrollArea } from '@radix-ui/themes';
import playerData from '../../players.json';

const chunkArray = (arr: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const WhoIsPlaying = () => {
  console.log(playerData);
  const [cardsStart, setCardsStart] = useState(0);
  const [cardsEnd, setCardsEnd] = useState(4);
  const slicedPlayers = playerData.players.slice(cardsStart, cardsEnd);
  const splitPlayers = chunkArray(playerData.players, 4);
  return (
    <div className="main-container">
      <div className="header">
        <h1>Who is playing?</h1>
      </div>
      <Formik
        initialValues={playerData.players}
        onSubmit={(values) => {
          console.log('Submitted values:', values);
        }}
      >
        <Form>
          <Card>
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 400, width: 300 }}>
              <Box pr="3">
                {playerData?.players.map(({ name, rating }) => (
                  <Card key={name} style={{ margin: 10 }}>
                    <Field>
                      {({ field }: any) => (
                        <Flex gap="10px" align="center" justify="between">
                          {name}
                          <Checkbox
                            defaultChecked
                            color="plum"
                            variant="surface"
                            size="2"
                          />
                        </Flex>
                      )}
                    </Field>
                  </Card>
                ))}
              </Box>
            </ScrollArea>
            <Button variant="surface" color="plum" type="submit" style={{ marginTop: 10 }}>
              Next
            </Button>
          </Card>
        </Form>
      </Formik>
    </div>
  )
};

export default WhoIsPlaying;