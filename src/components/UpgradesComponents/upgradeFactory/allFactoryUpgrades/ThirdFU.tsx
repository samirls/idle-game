import { Box, Button } from "@chakra-ui/react";

interface ThirdUpgradeProps {
  upgradeF3Cost: number;
  money: number;
  upgradeF3Action: () => void;
}

export default function ThirdFU({
  upgradeF3Cost,
  money,
  upgradeF3Action,
}: ThirdUpgradeProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="16px" fontWeight="500">
          +60 coins per second
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgradeF3Cost.toLocaleString()}
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeF3Cost} onClick={upgradeF3Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
