import { Box, Flex, Text } from '@radix-ui/themes';

const Header = ({ subMessage }: { subMessage: string }) => {
  return (
    <Box style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-between'  }}>
      <Box>
        <img src="/assets/ev-cl.png" height="85px" />
      </Box>
      <Box>
        <Flex direction="column" align="center" gap="2">
          <Text size="6" weight="bold">EV CHAMPIONS LEAGUE</Text>
          <Text size="3" weight="bold">{subMessage}</Text>
        </Flex>
      </Box>
      <Box></Box>
    </Box> 
  )
};

export default Header;