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
      <Box fontSize="20px" >
          <Box as="span" fontSize="20px" fontWeight={800}>
            + 1 
          </Box>{" "}
          coin per click
        </Box>
        <Box fontSize="18px" mt="-6px" fontWeight={300}>
          Cost: {upgradeOneCost.toLocaleString()} gold coins.
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
