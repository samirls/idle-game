import { Box, Button } from "@chakra-ui/react";

interface FourthUpgradeProps {
  upgradeF4Cost: number;
  money: number;
  upgradeF4Action: () => void;
}

export default function FourthFU({
  upgradeF4Cost,
  money,
  upgradeF4Action,
}: FourthUpgradeProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="16px" fontWeight="500">
          +100 coins per second
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgradeF4Cost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeF4Cost} onClick={upgradeF4Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
