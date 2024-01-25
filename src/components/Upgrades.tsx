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
import { GiWarPick } from "react-icons/gi";
import { AiFillGold } from "react-icons/ai";
import { FcFactory } from "react-icons/fc";
import UpgradeFactory2 from "./UpgradesComponents/upgradeFactory2/UpgradeFactory2";
import { kalam } from "@/app/ui/fonts";

interface UpgradesProps {
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  clickPower: number;
  setClickPower: React.Dispatch<React.SetStateAction<number>>;
  clickPowerMultiplier: number;
  setClickPowerMultiplier: React.Dispatch<React.SetStateAction<number>>;
  setFifthUpgradeBought: React.Dispatch<React.SetStateAction<boolean>>;
  setSixthUpgradeDelayTime: React.Dispatch<React.SetStateAction<number>>;
  setFactoryUpgradeBought: React.Dispatch<React.SetStateAction<boolean>>;
  moneyUpgradeValue: number;
  setMoneyUpgradeValue: React.Dispatch<React.SetStateAction<number>>;
  multiplyFactorFU: number;
  setMultiplyFactorFU: React.Dispatch<React.SetStateAction<number>>;
  mineLicense: boolean;
  goldFactoryLicense: boolean;
  moneyUpgradeDelay: number;
  setMoneyUpgradeDelay: React.Dispatch<React.SetStateAction<number>>;
  setClickPowerToDisplay: React.Dispatch<React.SetStateAction<number>>;
}

export default function Upgrades({
  money,
  setMoney,
  clickPower,
  setClickPower,
  clickPowerMultiplier,
  setClickPowerMultiplier,
  setFifthUpgradeBought,
  setSixthUpgradeDelayTime,
  setFactoryUpgradeBought,
  moneyUpgradeValue,
  setMoneyUpgradeValue,
  multiplyFactorFU,
  setMultiplyFactorFU,
  mineLicense,
  goldFactoryLicense,
  moneyUpgradeDelay,
  setMoneyUpgradeDelay,
  setClickPowerToDisplay,
}: UpgradesProps) {
  return (
    <Box display="flex" justifyContent="center" width="80%">
      <Box display="flex" flexDir="column" gap={3} width="80%">
        <Box
          display="flex"
          justifyContent="center"
          fontSize="30px"
          fontWeight={700}
          className={kalam.className}
        >
          <Box>
            Upgrades
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Tabs
            position="relative"
            variant="unstyled"
            height="450px"
            width="85%"
          >
            <TabList>
              <Tab gap={2} fontSize="22px">
                Pickaxe{" "}
                <Box fontSize="30px">
                  <GiWarPick />
                </Box>
              </Tab>
              <Tab gap={2} fontSize="22px">
                Mine{" "}
                <Box fontSize="30px" color="yellow.300">
                  <AiFillGold />
                </Box>
              </Tab>
              <Tab gap={2} fontSize="22px">
                Factory{" "}
                <Box fontSize="30px">
                  <FcFactory />
                </Box>
              </Tab>
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
                  clickPowerMultiplier={clickPowerMultiplier}
                  setClickPowerMultiplier={setClickPowerMultiplier}
                  setClickPowerToDisplay={setClickPowerToDisplay}
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
                  mineLicense={mineLicense}
                />
              </TabPanel>
              <TabPanel>
                <UpgradeFactory2
                  money={money}
                  setMoney={setMoney}
                  moneyUpgradeValue={moneyUpgradeValue}
                  setMoneyUpgradeValue={setMoneyUpgradeValue}
                  multiplyFactorFU={multiplyFactorFU}
                  setMultiplyFactorFU={setMultiplyFactorFU}
                  goldFactoryLicense={goldFactoryLicense}
                  moneyUpgradeDelay={moneyUpgradeDelay}
                  setMoneyUpgradeDelay={setMoneyUpgradeDelay}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
