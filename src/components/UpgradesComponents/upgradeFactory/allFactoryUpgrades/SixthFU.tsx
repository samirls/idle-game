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
        <Box as="span" fontSize='20px' fontWeight={700}>
          Coin multiplier + 5
        </Box>{" "}
        <Box fontSize="18px" fontWeight={300} mt="-6px">
          Cost: {upgradeF6Cost.toLocaleString()} gold coins.
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
