import { Box, Flex, Text } from '@radix-ui/themes';

const Header = ({ hideHeader, subMessage }: { hideHeader: boolean, subMessage: string }) => {
  return (
    <Box style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-between'  }}>
      <Box>
        <img src="/assets/ev-cl.png" height="80px" />
      </Box>
      <Box>
        <Flex direction="column" align="center" gap="2">
          {!hideHeader && (<Text size="6" weight="bold">EV CHAMPIONS LEAGUE</Text>)}
          <Text size="3" weight="bold">{subMessage}</Text>
        </Flex>
      </Box>
      <Box></Box>
    </Box> 
  )
};

export default Header;