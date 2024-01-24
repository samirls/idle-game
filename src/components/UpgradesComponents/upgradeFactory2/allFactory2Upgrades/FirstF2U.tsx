import { Box, Button } from "@chakra-ui/react";

interface FirstF2UProps {
  upgrade1Cost: number;
  money: number;
  upgrade1Action: () => void;
  upgrade1Out: boolean;
}

export default function FirstF2U({
  upgrade1Cost,
  money,
  upgrade1Action,
  upgrade1Out,
}: FirstF2UProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="16px" fontWeight="500">
          -100ms delay of coins per second
        </Box>
        <Box fontSize="16px" mt="-6px">
          Cost: {upgrade1Cost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgrade1Cost || upgrade1Out} onClick={upgrade1Action}>
          {upgrade1Out ? "Bought" : "Buy"}
        </Button>
      </Box>
    </Box>
  );
}
