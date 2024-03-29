import { Box } from "@chakra-ui/react";
import { PiCoinVerticalLight } from "react-icons/pi";
import { LuMousePointerClick } from "react-icons/lu";
import { GiCoins } from "react-icons/gi";
import { RxLapTimer } from "react-icons/rx";
import { kalam } from "@/app/ui/fonts";

interface StatisticsProps {
  money: number;
  clickPowerToDisplay: number;
  multiplyFactorToDisplay: number;
  moneyUpgradeDelay: number;
}

export default function Statistics({
  money,
  clickPowerToDisplay,
  multiplyFactorToDisplay,
  moneyUpgradeDelay,
}: StatisticsProps) {
  const displaySeconds = () => {
    if (moneyUpgradeDelay === 1000) {
      return 1;
    }
    if (moneyUpgradeDelay === 900) {
      return 0.9;
    }
    if (moneyUpgradeDelay === 800) {
      return 0.8;
    }
    if (moneyUpgradeDelay === 700) {
      return 0.7;
    }
    if (moneyUpgradeDelay === 600) {
      return 0.6;
    }
    if (moneyUpgradeDelay === 500) {
      return 0.5;
    }
    if (moneyUpgradeDelay === 400) {
      return 0.4;
    }
    if (moneyUpgradeDelay === 300) {
      return 0.3;
    }
    if (moneyUpgradeDelay === 200) {
      return 0.2;
    }
    if (moneyUpgradeDelay === 100) {
      return 0.1;
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Box
          fontSize="30px"
          fontWeight={600}
          display="flex"
          justifyContent="center"
          className={kalam.className}
        >
          <Box>Statistics</Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" pt="30px">
        <Box width="250px">
          <Box display="flex" alignItems="center" gap={2}>
            <Box fontSize='22px' fontWeight={500}>Total gold coins:</Box>
            <Box
              fontSize="30px"
              color="yellow.600"
              bg="yellow"
              borderRadius="50%"
            >
              {money > 1000 ? <GiCoins /> : <PiCoinVerticalLight/>}
            </Box>
          </Box>
          <Box fontSize='20px' fontWeight={300}>{money.toLocaleString()}</Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" pt="30px">
        <Box width="250px">
          <Box display="flex" alignItems="center" gap={2}>
            <Box fontSize='22px' fontWeight={500}>Click Power:</Box>
            <Box
              fontSize="30px"
              color='red'
            >
              <LuMousePointerClick />
            </Box>
          </Box>
          <Box fontSize='20px' fontWeight={300}>{clickPowerToDisplay.toLocaleString()}</Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" pt="30px">
        <Box width="250px">
          <Box display="flex" alignItems="center" gap={2}>
            <Box fontSize='22px' fontWeight={500}>Coins / Time:</Box>
            <Box
              fontSize="30px"
              color='blue'
            >
              <RxLapTimer />
            </Box>
          </Box>
          <Box fontSize='20px' fontWeight={300}>{multiplyFactorToDisplay.toLocaleString()} gold coins / {displaySeconds()} second</Box>
        </Box>
      </Box>



      
      
    </Box>
  );
}
