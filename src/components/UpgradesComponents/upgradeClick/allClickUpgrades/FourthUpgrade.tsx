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
        <Box fontSize="16px" fontWeight="500">
          <Box as="span" fontSize="24px" fontWeight={800}>
            x 2
          </Box>{" "}
          coins per click
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgradeFourCost.toLocaleString()}
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
