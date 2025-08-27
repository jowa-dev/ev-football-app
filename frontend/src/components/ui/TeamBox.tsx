/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Text } from "@radix-ui/themes";

const TeamBox = ({ team, teamNumber, rating }: { team: any, teamNumber: string, rating: number }) => {
  return (
    <Box style={{ width: '100%' }}>
      <Text size="2" weight="bold">TEAM {teamNumber} ({`Rating: ${rating}`})</Text>

      <Box 
        style={{ display: 'flex', gap: '5px', flexDirection: 'column', marginTop: '10px' }}
      >
        {team.map((player: any, index: number) => (
          <Box 
            style={{ background: '#06174d', borderRadius: '5px', padding: '7px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}
          >
            <Flex direction="column" gap="1">
              <Text size="4" weight="bold">
                {player.isAnon ? player.anonName : `${player.name} ${index === 0 ? '©️' : ''}`}
              </Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TeamBox;