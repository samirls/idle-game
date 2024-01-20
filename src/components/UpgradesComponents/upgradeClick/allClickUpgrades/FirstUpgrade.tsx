import { Box, Button } from "@chakra-ui/react";

interface FirstUpgradeProps {
  upgradeOneCost: number;
  money: number;
  upgradeOneAction: () => void;
}

export default function FirstUpgrade({upgradeOneCost, money, upgradeOneAction}: FirstUpgradeProps) {
  
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="16px" fontWeight="500">
          +1 coin per click
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgradeOneCost}
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeOneCost} onClick={upgradeOneAction}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
