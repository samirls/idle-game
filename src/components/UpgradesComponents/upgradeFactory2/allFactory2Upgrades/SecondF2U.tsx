import { Box, Button } from "@chakra-ui/react";

interface SecondUpgrade2Props {
  upgrade2Cost: number;
  money: number;
  upgrade2Action: () => void;
}

export default function SecondF2U({
  upgrade2Cost,
  money,
  upgrade2Action,
}: SecondUpgrade2Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="16px" fontWeight="500">
          +200 coins per second
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgrade2Cost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgrade2Cost} onClick={upgrade2Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
