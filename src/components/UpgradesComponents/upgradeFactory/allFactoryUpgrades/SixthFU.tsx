import { Box, Button } from "@chakra-ui/react";

interface SixthUpgradeProps {
  upgradeF6Cost: number;
  money: number;
  upgradeF6Action: () => void;
}

export default function SixthFU({
  upgradeF6Cost,
  money,
  upgradeF6Action,
}: SixthUpgradeProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="16px" fontWeight="500">
          x 5 coins per second
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgradeF6Cost.toLocaleString()}
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeF6Cost} onClick={upgradeF6Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
