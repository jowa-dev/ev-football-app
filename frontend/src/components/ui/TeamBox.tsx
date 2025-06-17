import { Box, Flex, Text } from "@radix-ui/themes";

const TeamBox = ({ team, teamNumber }: { team: any, teamNumber: string }) => {
  return (
    <Box>
      <Text size="3" weight="bold">TEAM {teamNumber}</Text>

      <Box 
        style={{ display: 'flex', gap: '5px', flexDirection: 'row', flexWrap: 'wrap', marginTop: '10px' }}
      >
        {team.map((player: any, index: number) => (
          <Box 
            style={{ background: '#06174d', borderRadius: '5px', padding: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px', width: '49.3%' }}
          >
            <Flex direction="column" gap="1">
              <Text size="3" weight="bold">
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