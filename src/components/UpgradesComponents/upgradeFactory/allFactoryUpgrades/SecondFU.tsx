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
      <Box fontSize="20px">
        <Box as="span" fontSize="20px" fontWeight={700}>
          + 40
        </Box>{" "}
        coins per second
        <Box fontSize="18px" fontWeight={300} mt="-6px">
          Cost: {upgradeF2Cost.toLocaleString()} gold coins.
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
