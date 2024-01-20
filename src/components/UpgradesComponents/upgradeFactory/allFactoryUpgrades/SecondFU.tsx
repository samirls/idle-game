import { Box, Button } from "@chakra-ui/react";

interface SecondUpgradeProps {
  upgradeF2Cost: number;
  money: number;
  upgradeF2Action: () => void;
}

export default function SecondFU({
  upgradeF2Cost,
  money,
  upgradeF2Action,
}: SecondUpgradeProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="16px" fontWeight="500">
          +40 coins per second
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgradeF2Cost}
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeF2Cost} onClick={upgradeF2Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
