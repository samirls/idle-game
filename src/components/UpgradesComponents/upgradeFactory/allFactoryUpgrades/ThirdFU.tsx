import { Box, Button } from "@chakra-ui/react";

interface ThirdUpgradeProps {
  upgradeF3Cost: number;
  money: number;
  upgradeF3Action: () => void;
}

export default function ThirdFU({
  upgradeF3Cost,
  money,
  upgradeF3Action,
}: ThirdUpgradeProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box fontSize="20px">
        <Box as="span" fontSize="20px" fontWeight={700}>
          + 60
        </Box>{" "}
          coins per second
        <Box fontSize="18px" fontWeight={300} mt="-6px">
          Cost: {upgradeF3Cost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeF3Cost} onClick={upgradeF3Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
