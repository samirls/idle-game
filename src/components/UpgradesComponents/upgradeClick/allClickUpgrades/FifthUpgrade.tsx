import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface FifthUpgradeProps {
  upgradeFiveCost: number;
  money: number;
  upgradeFiveAction: () => void;
  setFifthUpgradeBought: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FifthUpgrade({
  upgradeFiveCost,
  money,
  upgradeFiveAction,
  setFifthUpgradeBought
}: FifthUpgradeProps) {
  const [checkBought, setCheckBought] = useState(false);

  const handleClick = () => {
    upgradeFiveAction();
    setCheckBought(true);
    setFifthUpgradeBought(true);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="20px" fontWeight="500">
          <Box as="span" fontSize="20px" fontWeight={700}>
            Enter key
          </Box>{" "}
          earns money too
        </Box>
        <Box fontSize="18px" mt="-6px" fontWeight={300}>
          Cost: {upgradeFiveCost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button
          isDisabled={money < upgradeFiveCost || checkBought}
          onClick={handleClick}
        >
          {checkBought ? "Bought" : "Buy"}
        </Button>
      </Box>
    </Box>
  );
}
