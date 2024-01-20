import { Box, Button } from "@chakra-ui/react";

interface SecondUpgradeProps {
  upgradeF1Cost: number;
  money: number;
  upgradeF1Action: () => void;
}

export default function FirstFU({
  upgradeF1Cost,
  money,
  upgradeF1Action,
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
          +20 coins per second
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgradeF1Cost}
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeF1Cost} onClick={upgradeF1Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
