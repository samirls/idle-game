import { Box, Button } from "@chakra-ui/react";

interface FirstUpgradeProps {
  upgradeF1Cost: number;
  money: number;
  upgradeF1Action: () => void;
}

export default function FirstFU({
  upgradeF1Cost,
  money,
  upgradeF1Action,
}: FirstUpgradeProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
    >
      <Box>
        <Box fontSize="20px">
          <Box as="span"  fontWeight={700}>
            + 20
          </Box>{" "}
           coins per second
        </Box>
        <Box fontSize="18px" fontWeight={300} mt="-6px">
          Cost: {upgradeF1Cost.toLocaleString()} gold coins.
        </Box>
      </Box>
      <Box>
        <Button isDisabled={money < upgradeF1Cost} onClick={upgradeF1Action}>
          Buy
        </Button>
      </Box>
    </Box>
  );
}
