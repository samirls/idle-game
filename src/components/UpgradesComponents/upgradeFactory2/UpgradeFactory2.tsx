"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { PiLockKeyFill } from "react-icons/pi";
import FirstF2U from "./allFactory2Upgrades/FirstF2U";
import SecondF2U from "./allFactory2Upgrades/SecondF2U";
import ThirdF2U from "./allFactory2Upgrades/ThirdF2U";
import FourthF2U from "./allFactory2Upgrades/FourthF2U";

interface UpgradeFactory2Props {
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  moneyUpgradeValue: number;
  setMoneyUpgradeValue: React.Dispatch<React.SetStateAction<number>>;
  multiplyFactorFU: number;
  setMultiplyFactorFU: React.Dispatch<React.SetStateAction<number>>;
  goldFactoryLicense: boolean;
  moneyUpgradeDelay: number;
  setMoneyUpgradeDelay: React.Dispatch<React.SetStateAction<number>>;
}

export default function UpgradeFactory2({
  money,
  setMoney,
  moneyUpgradeValue,
  setMoneyUpgradeValue,
  multiplyFactorFU,
  setMultiplyFactorFU,
  goldFactoryLicense,
  moneyUpgradeDelay,
  setMoneyUpgradeDelay,
}: UpgradeFactory2Props) {
  const [upgrade1Cost, setUpgrade1Cost] = useState(8000);
  const [upgrade1Out, setUpgrade1Out] = useState(false);
  const [upgrade2Cost, setUpgrade2Cost] = useState(7000);
  const [upgrade3Cost, setUpgrade3Cost] = useState(14000);
  const [upgrade4Cost, setUpgrade4Cost] = useState(21000);

  const upgrade1Action = () => {
    setMoney(money - upgrade1Cost);
    setMoneyUpgradeDelay(moneyUpgradeDelay - 100);
    setUpgrade1Cost(upgrade1Cost * 2);
    if (moneyUpgradeDelay < 300) {
      setUpgrade1Out(true);
      return;
    }
  };

  const upgrade2Action = () => {
    setUpgrade2Cost(upgrade2Cost * 2);
    setMoney(money - upgrade2Cost);
    setMoneyUpgradeValue(moneyUpgradeValue + 200);
  };

  const upgrade3Action = () => {
    setUpgrade3Cost(upgrade3Cost * 2);
    setMoney(money - upgrade3Cost);
    setMoneyUpgradeValue(moneyUpgradeValue + 500);
  };

  const upgrade4Action = () => {
    setUpgrade4Cost(upgrade4Cost * 2);
    setMoney(money - upgrade4Cost);
    setMoneyUpgradeValue(moneyUpgradeValue + 1000);
  };

  return (
    <Box>
      {goldFactoryLicense ? (
        <Box>
          <FirstF2U
            money={money}
            upgrade1Cost={upgrade1Cost}
            upgrade1Action={upgrade1Action}
            upgrade1Out={upgrade1Out}
          />
          <SecondF2U
            money={money}
            upgrade2Cost={upgrade2Cost}
            upgrade2Action={upgrade2Action}
          />
          <ThirdF2U
            money={money}
            upgrade3Cost={upgrade3Cost}
            upgrade3Action={upgrade3Action}
          />
          <FourthF2U
            money={money}
            upgrade4Cost={upgrade4Cost}
            upgrade4Action={upgrade4Action}
          />
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap={5}
        >
          <Box fontSize="18px" textAlign="center" pt="30px">
            You must have political support and a license to own a factory!
          </Box>
          <Box fontSize="40px" color="orange.700">
            <PiLockKeyFill />
          </Box>
        </Box>
      )}
    </Box>
  );
}
