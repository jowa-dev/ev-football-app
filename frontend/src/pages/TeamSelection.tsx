/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Box, Flex, Button, Separator } from '@radix-ui/themes';
import '../components/styles/team-selection.css';
import NoPlayersSelected from '../components/ui/NoPlayersSelected';
import Header from '../components/ui/Header';
import TeamBox from '../components/ui/TeamBox';
import { teamGenerate } from '../functions/generator';

const TeamSelection = ({ players }: any) => {
  const mappedPlayers = players.map((player: any, index: number) => ({
    ...player,
    isAnon: true,
    anonName: `Player ${index + 1}`
  }))
  const generatedTeams = teamGenerate(mappedPlayers);
  const [teamOne, setTeamOne]: any = useState(generatedTeams?.array1);
  const [teamTwo, setTeamTwo]: any = useState(generatedTeams?.array2);
  const [teamOneSelected, setTeamOneSelected] = useState(true);

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

  const convertToSlackMessage = () => {
    const teamText = 
    `🥊 Team 1\n` +
    teamOne.map((player: any, index: number) => `- ${player.name} ${index === 0 ? '(C)' : ''}`).join('\n') +
    `\n-------\n` +
    `🐯 Team 2\n` +
    teamTwo.map((player: any, index: number) => `- ${player.name} ${index === 0 ? '(C)' : ''}`).join('\n');
    navigator.clipboard.writeText(teamText);
  }

  if (players.length === 0 && teamOne.length === 0) return (
    <div>
      <NoPlayersSelected />
    </div>
  );

  return (
    <Flex height="100vh" justify="center" align="center" gap="10px" direction="column">
      <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Box 
          style={{ background: '#010e38', borderRadius: '10px', border: '1px solid rgb(133, 133, 133)', display: 'flex', flexDirection: 'column', gap: '10px', width: '32%' }} 
          p="20px"
        >
          <Header hideHeader={true} subMessage="GENERATED TEAMS" />
          <Box style={{ display: 'flex', gap: '10px', width: '100%' }}>
            <TeamBox team={teamOne} teamNumber="1" rating={generatedTeams?.teamOneRating} />
            <Separator orientation="vertical" decorative style={{ height: '100%', width: '1%', background: '#363636' }} />
            <TeamBox team={teamTwo} teamNumber="2" rating={generatedTeams?.teamTwoRating} />
          </Box>
          <Flex mt="4" direction="column" gap="2">
            <Button
              style={{ width: '50%', margin: '0 auto', cursor: 'pointer' }} 
              variant="soft" 
              color="sky"
              onClick={handleDraw}
              disabled={teamOne.every((player: any) => !player.isAnon) && teamTwo.every((player: any) => !player.isAnon)}
            >
              Draw
            </Button>
            <Button
              style={{ width: '55%', margin: '0 auto', cursor: 'pointer' }} 
              variant="soft" 
              color="sky"
              onClick={convertToSlackMessage}
              disabled={!(teamOne.every((player: any) => !player.isAnon) && teamTwo.every((player: any) => !player.isAnon))}
            >
              Convert to Slack Message
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default TeamSelection;
