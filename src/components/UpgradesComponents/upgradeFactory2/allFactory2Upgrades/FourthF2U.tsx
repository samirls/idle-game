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
      <Box fontSize="20px">
          <Box as="span" fontSize="20px" fontWeight="700">
            + 1000
          </Box>{" "}
          coins per second
        </Box>
        <Box fontSize="18px" fontWeight={300}>
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
