import { Box } from "@chakra-ui/react";
import { PiCoinVerticalLight } from "react-icons/pi";
import { LuMousePointerClick } from "react-icons/lu";

interface MoneyProps {
  money: number;
  clickPower: number;
}

export default function Money({ money, clickPower }: MoneyProps) {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Box>
          <Box>Your Money:</Box>
          <Box>{money.toFixed()} gold coins</Box>
          <PiCoinVerticalLight />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" pt="30px">
        <Box >
          <Box>Click Power:</Box>
          <Box>{clickPower}</Box>
          <LuMousePointerClick />
        </Box>
      </Box>
    </Box>
  );
}
