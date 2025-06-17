import { Box, Text, Flex, Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const NoPlayersSelected = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
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
        <Button onClick={handleBack} color="iris" style={{ width: '50%', margin: '0 auto', cursor: 'pointer' }} variant="soft">
          Back
        </Button>
      </Box>
    </Flex>
  )
}


export default NoPlayersSelected;