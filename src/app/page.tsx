"use client";

import Upgrades from "@/components/Upgrades";
import styles from "./page.module.css";
import { Box, Button, Grid, IconButton } from "@chakra-ui/react";
import Statistics from "@/components/Statistics";
import GameDisplay from "@/components/GameDisplay";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Howl } from "howler";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

export default function Home() {
  const toast = useToast();
  const [clickSound, setClickSound] = useState<Howl | null>(null);
  const [manyCoins, setManyCoins] = useState<Howl | null>(null);
  const [muted, setMuted] = useState(false);
  const [clickPower, setClickPower] = useState(1);
  const [money, setMoney] = useState(0);
  const [fifthUpgradeBought, setFifthUpgradeBought] = useState(false);
  const [sixthUpgradeDelay, setSixthUpgradeDelay] = useState(false);
  const [sixthUpgradeDelayTime, setSixthUpgradeDelayTime] = useState(90);
  const [factoryUpgradeBought, setFactoryUpgradeBought] = useState(false);
  const [moneyUpgradeValue, setMoneyUpgradeValue] = useState(0);
  const [multiplyFactorFU, setMultiplyFactorFU] = useState(0);
  const [mineLicense, setMineLicense] = useState(false);
  const [goldFactoryLicense, setGoldFactoryLicense] = useState(false);
  const [moneyUpgradeDelay, setMoneyUpgradeDelay] = useState(1000);
  const [multiplyFactorToDisplay, setMultiplyFactorToDisplay] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clickMoney = () => {
    setMoney((prevMoney) => prevMoney + clickPower);

    if (clickSound && !muted) {
      clickSound.play();
    }

    toast({
      position: "top-right",
      duration: 1000,
      render: () => (
        <Box
          color="gray.500"
          p={3}
          bg="#f6dd5e80"
          fontWeight={700}
          borderRadius="50px"
          display="flex"
          justifyContent="center"
          border="5px solid #ffe32b80"
        >
          {`+ ${clickPower} coins`}
        </Box>
      ),
    });
    setSixthUpgradeDelay(true);
    setTimeout(() => {
      setSixthUpgradeDelay(false);
    }, sixthUpgradeDelayTime);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const moneyEvery1s = () => {
    if (factoryUpgradeBought) {
      let multiplyFactorFUUpdated: number;

      if (multiplyFactorFU === 0) {
        multiplyFactorFUUpdated = moneyUpgradeValue;
      } else {
        multiplyFactorFUUpdated = moneyUpgradeValue * multiplyFactorFU;
      }
      setMoney((prevMoney) => prevMoney + multiplyFactorFUUpdated);
      setMultiplyFactorToDisplay(multiplyFactorFUUpdated);

      if (manyCoins && !muted) {
        manyCoins.play();
      }

      toast({
        position: "top-right",
        duration: 1000,
        render: () => (
          <Box
            color="gray.500"
            p={3}
            bg="#f6e05e80"
            fontWeight={700}
            borderRadius="50px"
            display="flex"
            justifyContent="center"
            border="5px solid #fbff2b80"
          >
            {`+ ${multiplyFactorFUUpdated} coins from factories`}
          </Box>
        ),
      });
    }
  };

  console.log(multiplyFactorToDisplay);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && fifthUpgradeBought) {
        e.preventDefault();
        clickMoney();
      }
    };

    document.addEventListener("keyup", handler);

    return () => {
      document.removeEventListener("keyup", handler);
    };
  }, [clickMoney, fifthUpgradeBought]);

  useEffect(() => {
    setClickSound(new Howl({ src: ["/coin.mp3"], volume: 0.4 }));
    setManyCoins(new Howl({ src: ["/many-coins.mp3"], volume: 0.3 }));

    const backgroundMusic = new Howl({
      src: ["/music.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.7,
      mute: muted,
    });

    return () => {
      backgroundMusic.stop();
    };
  }, [muted]);

  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted);

    if (clickSound) {
      clickSound.mute(muted);
    }
    if (manyCoins) {
      manyCoins.mute(muted);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(moneyEvery1s, moneyUpgradeDelay);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    factoryUpgradeBought,
    moneyUpgradeValue,
    multiplyFactorFU,
    muted,
    moneyUpgradeDelay,
  ]);

  return (
    <>
      <Box height="100vh">
        <Box display="flex" justifyContent="center" pt="20px" fontSize="38px">
          Get Rich
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" pt="50px">
          <Upgrades
            money={money}
            setMoney={setMoney}
            clickPower={clickPower}
            setClickPower={setClickPower}
            setFifthUpgradeBought={setFifthUpgradeBought}
            setSixthUpgradeDelayTime={setSixthUpgradeDelayTime}
            setFactoryUpgradeBought={setFactoryUpgradeBought}
            moneyUpgradeValue={moneyUpgradeValue}
            setMoneyUpgradeValue={setMoneyUpgradeValue}
            multiplyFactorFU={multiplyFactorFU}
            setMultiplyFactorFU={setMultiplyFactorFU}
            mineLicense={mineLicense}
            goldFactoryLicense={goldFactoryLicense}
            moneyUpgradeDelay={moneyUpgradeDelay}
            setMoneyUpgradeDelay={setMoneyUpgradeDelay}
          />
          <GameDisplay
            money={money}
            setMoney={setMoney}
            setMineLicense={setMineLicense}
            setGoldFactoryLicense={setGoldFactoryLicense}
          />
          <Statistics
            money={money}
            clickPower={clickPower}
            multiplyFactorToDisplay={multiplyFactorToDisplay}
            moneyUpgradeDelay={moneyUpgradeDelay}
          />
        </Grid>

        <Box display="flex" justifyContent="center" pt="30px">
          <Button
            colorScheme="whatsapp"
            onClick={clickMoney}
            isLoading={sixthUpgradeDelay}
          >
            {fifthUpgradeBought ? "Press Enter or Click" : "Click for coins"}
          </Button>
        </Box>
        <IconButton
          colorScheme="blue"
          aria-label="Volume on/off"
          icon={muted ? <IoVolumeMute /> : <IoVolumeHigh />}
          onClick={toggleMute}
          fontSize="20px"
          size="sm"
          position="absolute"
          top={"40%"}
          right={2}
        />
      </Box>
    </>
  );
}
