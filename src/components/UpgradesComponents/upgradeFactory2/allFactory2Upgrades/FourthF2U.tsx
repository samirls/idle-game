import { Box, Button } from "@chakra-ui/react";

interface FourthUpgrade2Props {
  upgrade4Cost: number;
  money: number;
  upgrade4Action: () => void;
}

export default function FourthF2U({
  upgrade4Cost,
  money,
  upgrade4Action,
}: FourthUpgrade2Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="16px" fontWeight="500">
          +1000 coins per second
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgrade4Cost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgrade4Cost} onClick={upgrade4Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
