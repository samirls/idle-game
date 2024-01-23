import { Box, Button } from "@chakra-ui/react";

interface ThirdUpgradeProps {
  upgradeThreeCost: number;
  money: number;
  upgradeThreeAction: () => void;
}

export default function ThirdUpgrade({
  upgradeThreeCost,
  money,
  upgradeThreeAction,
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
          <Box as="span" fontSize="22px" fontWeight={800}>
            +5
          </Box>{" "}
          coins per click
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgradeThreeCost.toLocaleString()}
        </Box>
      </Box>
      <Box>
        <Button
          isDisabled={money < upgradeThreeCost}
          onClick={upgradeThreeAction}
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
}
