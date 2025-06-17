import { Box, Text, Flex } from "@radix-ui/themes";

const NoPlayersSelected = () => (
  <Flex height="100vh" justify="center" align="center">
    <Box 
      style={{ background: '#010e38', borderRadius: '10px', border: '1px solid white', display: 'flex', flexDirection: 'column', gap: '30px' }} 
      p="20px"
    >
      <Box style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img src="/assets/cl.png" height="90px" />
        <Flex direction="column" align="center" gap="2">
          <Text size="6" weight="bold">EV CHAMPIONS LEAGUE</Text>
          <Text size="3" weight="bold">ERROR</Text>
        </Flex>
      </Box> 
      <Text size="6" weight="bold" style={{ textAlign: 'center' }}>
        No players selected
      </Text>
    </Box>
  </Flex>
)

export default NoPlayersSelected;