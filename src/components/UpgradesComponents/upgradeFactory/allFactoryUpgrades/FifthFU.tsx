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
      <Box fontSize="20px">
        <Box as="span" fontWeight={700}>
          Coin multiplier + 2
        </Box>{" "}
        <Box fontSize="18px" fontWeight={300} mt="-6px">
          Cost: {upgradeF5Cost.toLocaleString()} gold coins.
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
