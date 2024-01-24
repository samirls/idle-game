import { Box, Button } from "@chakra-ui/react";

interface SecondUpgradeProps {
  upgradeTwoCost: number;
  money: number;
  upgradeTwoAction: () => void;
}

export default function SecondUpgrade({
  upgradeTwoCost,
  money,
  upgradeTwoAction,
}: SecondUpgradeProps) {
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
            +2
          </Box>{" "}
          coins per click
        </Box>
        <Box fontSize="18px" mt="-6px" fontWeight={300}>
          Cost: {upgradeTwoCost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeTwoCost} onClick={upgradeTwoAction}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
