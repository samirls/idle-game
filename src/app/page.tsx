"use client";

import Upgrades from "@/components/Upgrades";
import styles from "./page.module.css";
import { Box, Button, Grid, IconButton } from "@chakra-ui/react";
import Money from "@/components/Money";
import GameDisplay from "@/components/GameDisplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Howl } from "howler";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

export default function Home() {
  const toast = useToast();
  const [clickSound, setClickSound] = useState<Howl | null>(null);
  const [manyCoins, setManyCoins] = useState<Howl | null>(null);
  const [muted, setMuted] = useState(false);
  const [clickPower, setClickPower] = useState(1);
  const [money, setMoney] = useState(20000);
  const [fifthUpgradeBought, setFifthUpgradeBought] = useState(false);
  const [sixthUpgradeDelay, setSixthUpgradeDelay] = useState(false);
  const [sixthUpgradeDelayTime, setSixthUpgradeDelayTime] = useState(90);
  const [factoryUpgradeBought, setFactoryUpgradeBought] = useState(false);
  const [moneyUpgradeValue, setMoneyUpgradeValue] = useState(0);
  const [multiplyFactorFU, setMultiplyFactorFU] = useState(0);

  const clickMoney = useCallback(() => {
    setMoney(money + clickPower);

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
          bg="yellow.200"
          fontWeight={700}
          borderRadius="50px"
          display="flex"
          justifyContent="center"
          border="5px solid yellow"
        >
          {`+ ${clickPower} coins`}
        </Box>
      ),
    });
    setSixthUpgradeDelay(true);
    setTimeout(() => {
      setSixthUpgradeDelay(false);
    }, sixthUpgradeDelayTime);
  }, [money, clickPower, clickSound, muted, toast, sixthUpgradeDelayTime]);

  const moneyEvery10s = useCallback(() => {
    if (factoryUpgradeBought && !muted) {
      let multiplyFactorFUUpdated: number;

      if (multiplyFactorFU === 0) {
        multiplyFactorFUUpdated = moneyUpgradeValue;
      } else {
        multiplyFactorFUUpdated = moneyUpgradeValue * multiplyFactorFU;
      }
      setMoney(money + multiplyFactorFUUpdated);

      if (manyCoins) {
        manyCoins.play();
      }

      toast({
        position: "top-right",
        duration: 1000,
        render: () => (
          <Box
            color="gray.500"
            p={3}
            bg="yellow.300"
            fontWeight={700}
            borderRadius="50px"
            display="flex"
            justifyContent="center"
            border="5px solid yellow"
          >
            {`+ ${multiplyFactorFUUpdated} coins from factories`}
          </Box>
        ),
      });
    }
  }, [
    factoryUpgradeBought,
    manyCoins,
    money,
    moneyUpgradeValue,
    multiplyFactorFU,
    muted,
    toast,
  ]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && fifthUpgradeBought) {
        e.preventDefault();
        clickMoney();
      }
    };

    document.addEventListener("keydown", handler);

    const intervalId = setInterval(moneyEvery10s, 1000);

    return () => {
      document.removeEventListener("keydown", handler);
      clearInterval(intervalId);
    };
  }, [clickMoney, fifthUpgradeBought, money, moneyEvery10s]);

  useEffect(() => {
    setClickSound(new Howl({ src: ["/coin.mp3"] }));
    setManyCoins(new Howl({ src: ["/many-coins.mp3"] }));

    const backgroundMusic = new Howl({
      src: ["/music.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.5,
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

  return (
    <>
      <Box height="100vh">
        <Box display="flex" justifyContent="center" pt="20px" fontSize="30px">
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
          />
          <GameDisplay />
          <Money money={money} clickPower={clickPower} />
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
          top={50}
          right={2}
        />
      </Box>
    </>
  );
}
