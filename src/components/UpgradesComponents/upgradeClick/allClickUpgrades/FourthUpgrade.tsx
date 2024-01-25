import { Box, Button } from "@chakra-ui/react";

interface FourthUpgradeProps {
  upgradeFourCost: number;
  money: number;
  upgradeFourAction: () => void;
}

export default function FourthUpgrade({
  upgradeFourCost,
  money,
  upgradeFourAction,
}: FourthUpgradeProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box>
          <Box as="span" fontSize="20px" fontWeight={800}>
            Coin multiplier + 2
          </Box>{" "}
          
        </Box>
        <Box fontSize="18px" mt="-6px" fontWeight={300}>
          Cost: {upgradeFourCost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeFourCost} onClick={upgradeFourAction}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
