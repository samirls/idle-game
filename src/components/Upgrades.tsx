"use client";

import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import UpgradeFactory from "./UpgradesComponents/upgradeFactory/UpgradeFactory";
import UpgradeClick from "./UpgradesComponents/upgradeClick/UpgradeClick";

interface UpgradesProps {
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  clickPower: number;
  setClickPower: React.Dispatch<React.SetStateAction<number>>;
  setFifthUpgradeBought: React.Dispatch<React.SetStateAction<boolean>>;
  setSixthUpgradeDelayTime: React.Dispatch<React.SetStateAction<number>>;
  setFactoryUpgradeBought: React.Dispatch<React.SetStateAction<boolean>>;
  moneyUpgradeValue: number;
  setMoneyUpgradeValue: React.Dispatch<React.SetStateAction<number>>;
  multiplyFactorFU: number;
  setMultiplyFactorFU: React.Dispatch<React.SetStateAction<number>>;
}

export default function Upgrades({
  money,
  setMoney,
  clickPower,
  setClickPower,
  setFifthUpgradeBought,
  setSixthUpgradeDelayTime,
  setFactoryUpgradeBought,
  moneyUpgradeValue,
  setMoneyUpgradeValue,
  multiplyFactorFU,
  setMultiplyFactorFU
}: UpgradesProps) {
  return (
    <Box display="flex" justifyContent="center" width="80%">
      <Box display="flex" flexDir="column" gap={3} width="80%">
        <Box
          display="flex"
          justifyContent="center"
          fontSize="22px"
          fontWeight={600}
        >
          Upgrades:
        </Box>
        <Box display="flex" justifyContent="center">
          <Tabs
            position="relative"
            variant="unstyled"
            height="450px"
            width="85%"
          >
            <TabList>
              <Tab>Click Upgrades</Tab>
              <Tab>Factory Upgrades</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <UpgradeClick
                  money={money}
                  setMoney={setMoney}
                  clickPower={clickPower}
                  setClickPower={setClickPower}
                  setFifthUpgradeBought={setFifthUpgradeBought}
                  setSixthUpgradeDelayTime={setSixthUpgradeDelayTime}
                />
              </TabPanel>
              <TabPanel>
                <UpgradeFactory
                  money={money}
                  setMoney={setMoney}
                  setFactoryUpgradeBought={setFactoryUpgradeBought}
                  moneyUpgradeValue={moneyUpgradeValue}
                  setMoneyUpgradeValue={setMoneyUpgradeValue}
                  multiplyFactorFU={multiplyFactorFU}
                  setMultiplyFactorFU={setMultiplyFactorFU}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
