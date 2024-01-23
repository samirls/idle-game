import { Box, Button } from "@chakra-ui/react";

interface FifthUpgradeProps {
  upgradeF5Cost: number;
  money: number;
  upgradeF5Action: () => void;
}

export default function FifthFU({
  upgradeF5Cost,
  money,
  upgradeF5Action,
}: FifthUpgradeProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="16px" fontWeight="500">
          x 2 coins per second
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgradeF5Cost.toLocaleString()}
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeF5Cost} onClick={upgradeF5Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
