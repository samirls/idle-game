import { Box, Button } from "@chakra-ui/react";

interface ThirdUpgrade2Props {
  upgrade3Cost: number;
  money: number;
  upgrade3Action: () => void;
}

export default function ThirdF2U({
  upgrade3Cost,
  money,
  upgrade3Action,
}: ThirdUpgrade2Props) {
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
            + 500
          </Box>{" "}
          coins per second
        </Box>
        <Box fontSize="18px" fontWeight={300}>
          Cost: {upgrade3Cost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgrade3Cost} onClick={upgrade3Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
