"use client";

import { Box } from "@chakra-ui/react";
import FirstFU from "./allFactoryUpgrades/FirstFU";
import { useState } from "react";
import SecondFU from "./allFactoryUpgrades/SecondFU";
import ThirdFU from "./allFactoryUpgrades/ThirdFU";
import FourthFU from "./allFactoryUpgrades/FourthFU";
import FifthFU from "./allFactoryUpgrades/FifthFU";
import SixthFU from "./allFactoryUpgrades/SixthFU";
import { PiLockKeyFill } from "react-icons/pi";

interface UpgradeFactoryProps {
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  setFactoryUpgradeBought: React.Dispatch<React.SetStateAction<boolean>>;
  moneyUpgradeValue: number;
  setMoneyUpgradeValue: React.Dispatch<React.SetStateAction<number>>;
  multiplyFactorFU: number;
  setMultiplyFactorFU: React.Dispatch<React.SetStateAction<number>>;
  mineLicense: boolean;
}

export default function UpgradeFactory({
  money,
  setMoney,
  setFactoryUpgradeBought,
  moneyUpgradeValue,
  setMoneyUpgradeValue,
  multiplyFactorFU,
  setMultiplyFactorFU,
  mineLicense,
}: UpgradeFactoryProps) {
  const [upgradeF1Cost, setUpgradeF1Cost] = useState(100);
  const [upgradeF2Cost, setUpgradeF2Cost] = useState(2000);
  const [upgradeF3Cost, setUpgradeF3Cost] = useState(5000);
  const [upgradeF4Cost, setUpgradeF4Cost] = useState(10000);
  const [upgradeF5Cost, setUpgradeF5Cost] = useState(40000);
  const [upgradeF6Cost, setUpgradeF6Cost] = useState(80000);

  const upgradeF1Action = () => {
    setUpgradeF1Cost(upgradeF1Cost * 2);
    setMoney(money - upgradeF1Cost);
    setFactoryUpgradeBought(true);
    setMoneyUpgradeValue(moneyUpgradeValue + 20);
  };

  const upgradeF2Action = () => {
    setUpgradeF2Cost(upgradeF2Cost * 2);
    setMoney(money - upgradeF2Cost);
    setFactoryUpgradeBought(true);
    setMoneyUpgradeValue(moneyUpgradeValue + 40);
  };

  const upgradeF3Action = () => {
    setUpgradeF3Cost(upgradeF3Cost * 2);
    setMoney(money - upgradeF3Cost);
    setFactoryUpgradeBought(true);
    setMoneyUpgradeValue(moneyUpgradeValue + 60);
  };

  const upgradeF4Action = () => {
    setUpgradeF4Cost(upgradeF4Cost * 3);
    setMoney(money - upgradeF4Cost);
    setFactoryUpgradeBought(true);
    setMoneyUpgradeValue(moneyUpgradeValue + 100);
  };

  const upgradeF5Action = () => {
    setUpgradeF5Cost(upgradeF5Cost * 3);
    setMoney(money - upgradeF5Cost);
    setFactoryUpgradeBought(true);
    setMultiplyFactorFU(multiplyFactorFU + 2);
  };

  const upgradeF6Action = () => {
    setUpgradeF6Cost(upgradeF6Cost * 3);
    setMoney(money - upgradeF6Cost);
    setFactoryUpgradeBought(true);
    setMultiplyFactorFU(multiplyFactorFU + 5);
  };

  return (
    <Box>
      {mineLicense ? (
        <Box>
          <FirstFU
            upgradeF1Cost={upgradeF1Cost}
            money={money}
            upgradeF1Action={upgradeF1Action}
          />
          <SecondFU
            upgradeF2Cost={upgradeF2Cost}
            money={money}
            upgradeF2Action={upgradeF2Action}
          />
          <ThirdFU
            upgradeF3Cost={upgradeF3Cost}
            money={money}
            upgradeF3Action={upgradeF3Action}
          />
          <FourthFU
            upgradeF4Cost={upgradeF4Cost}
            money={money}
            upgradeF4Action={upgradeF4Action}
          />
          <FifthFU
            upgradeF5Cost={upgradeF5Cost}
            money={money}
            upgradeF5Action={upgradeF5Action}
          />
          <SixthFU
            upgradeF6Cost={upgradeF6Cost}
            money={money}
            upgradeF6Action={upgradeF6Action}
          />
        </Box>
      ) : (
        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' gap={5} >
          <Box fontSize='18px' textAlign='center' pt='30px'>You must have a license to explore a mine!</Box>
          <Box fontSize='40px' color='orange.700'><PiLockKeyFill /></Box>
        </Box>
      )}
    </Box>
  );
}
