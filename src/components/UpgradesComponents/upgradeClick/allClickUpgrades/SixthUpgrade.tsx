import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

interface SixthUpgradeProps {
  upgradeSixCost: number;
  money: number;
  upgradeSixAction: () => void;
}

export default function SixthUpgrade({
  upgradeSixCost,
  money,
  upgradeSixAction,
}: SixthUpgradeProps) {
  const [checkBought, setCheckBought] = useState(false);

  const handleClick = () => {
    upgradeSixAction();
    setCheckBought(true);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="16px" fontWeight="500">
          <Box as="span" fontSize="20px" fontWeight={700}>
            Click Delay
          </Box>{" "}
          is 10x shorter
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgradeSixCost.toLocaleString()}
        </Box>
      </Box>
      <Box>
        <Button
          isDisabled={money < upgradeSixCost || checkBought}
          onClick={handleClick}
        >
          {checkBought ? "Bought" : "Buy"}
        </Button>
      </Box>
    </Box>
  );
}
