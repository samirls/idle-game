import { Box, Button } from "@chakra-ui/react";

interface FourthUpgradeProps {
  upgradeF4Cost: number;
  money: number;
  upgradeF4Action: () => void;
}

export default function FourthFU({
  upgradeF4Cost,
  money,
  upgradeF4Action,
}: FourthUpgradeProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box fontSize='20px'>
        <Box as="span" fontSize='20px' fontWeight={700}>
          + 100 
        </Box>{" "}
        coins per second
        <Box fontSize="18px" fontWeight={300} mt="-6px">
          Cost: {upgradeF4Cost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeF4Cost} onClick={upgradeF4Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
