"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import FirstUpgrade from "./allClickUpgrades/FirstUpgrade"; 
import SecondUpgrade from "./allClickUpgrades/SecondUpgrade"; 
import ThirdUpgrade from "./allClickUpgrades/ThirdUpgrade"; 
import FourthUpgrade from "./allClickUpgrades/FourthUpgrade"; 
import FifthUpgrade from "./allClickUpgrades/FifthUpgrade"; 
import SixthUpgrade from "./allClickUpgrades/SixthUpgrade"; 

interface UpgradeClickProps {
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  clickPower: number;
  setClickPower: React.Dispatch<React.SetStateAction<number>>;
  clickPowerMultiplier: number;
  setClickPowerMultiplier: React.Dispatch<React.SetStateAction<number>>;
  setFifthUpgradeBought: React.Dispatch<React.SetStateAction<boolean>>;
  setSixthUpgradeDelayTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function UpgradeClick({
  money,
  setMoney,
  clickPower,
  setClickPower,
  clickPowerMultiplier,
  setClickPowerMultiplier,
  setFifthUpgradeBought,
  setSixthUpgradeDelayTime,
}: UpgradeClickProps) {
  
  const [upgradeOneCost, setUpgradeOneCost] = useState(10);
  const [upgradeTwoCost, setUpgradeTwoCost] = useState(200);
  const [upgradeThreeCost, setUpgradeThreeCost] = useState(1000);
  const [upgradeFourCost, setUpgradeFourCost] = useState(4000);
  const [upgradeFiveCost, setUpgradeFiveCost] = useState(4000);
  const [upgradeSixCost, setUpgradeSixCost] = useState(4000);

  const upgradeOneAction = () => {
    setMoney(money - upgradeOneCost);
    setUpgradeOneCost(upgradeOneCost * 3);
    setClickPower(clickPower + 1);
  };

  const upgradeTwoAction = () => {
    setMoney(money - upgradeTwoCost);
    setUpgradeTwoCost(upgradeTwoCost * 3);
    setClickPower(clickPower + 2);
  };

  const upgradeThreeAction = () => {
    setMoney(money - upgradeThreeCost);
    setUpgradeThreeCost(upgradeThreeCost * 4);
    setClickPower(clickPower + 5);
  };

  const upgradeFourAction = () => {
    setMoney(money - upgradeFourCost);
    setUpgradeFourCost(upgradeFourCost * 12);
    setClickPowerMultiplier(clickPowerMultiplier + 2);
  };

  const upgradeFiveAction = () => {
    setMoney(money - upgradeFiveCost);
  };

  const upgradeSixAction = () => {
    setMoney(money - upgradeSixCost);
    setSixthUpgradeDelayTime(9)
  };

  return (
    <Box>
        <FirstUpgrade
          upgradeOneCost={upgradeOneCost}
          money={money}
          upgradeOneAction={upgradeOneAction}
        />
        <SecondUpgrade
          upgradeTwoCost={upgradeTwoCost}
          money={money}
          upgradeTwoAction={upgradeTwoAction}
        />
        <ThirdUpgrade
          upgradeThreeCost={upgradeThreeCost}
          money={money}
          upgradeThreeAction={upgradeThreeAction}
        />
        <FourthUpgrade
          upgradeFourCost={upgradeFourCost}
          money={money}
          upgradeFourAction={upgradeFourAction}
        />
        <FifthUpgrade
          upgradeFiveCost={upgradeFiveCost}
          money={money}
          upgradeFiveAction={upgradeFiveAction}
          setFifthUpgradeBought={setFifthUpgradeBought}
        />
        <SixthUpgrade
          upgradeSixCost={upgradeSixCost}
          money={money}
          upgradeSixAction={upgradeSixAction}
        />
    </Box>
  );
}
