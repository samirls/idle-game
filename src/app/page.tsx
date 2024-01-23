"use client";

import Upgrades from "@/components/Upgrades";
import styles from "./page.module.css";
import { Box, Button, Grid, IconButton } from "@chakra-ui/react";
import Money from "@/components/Money";
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
  const [money, setMoney] = useState(100000);
  const [fifthUpgradeBought, setFifthUpgradeBought] = useState(false);
  const [sixthUpgradeDelay, setSixthUpgradeDelay] = useState(false);
  const [sixthUpgradeDelayTime, setSixthUpgradeDelayTime] = useState(90);
  const [factoryUpgradeBought, setFactoryUpgradeBought] = useState(false);
  const [moneyUpgradeValue, setMoneyUpgradeValue] = useState(0);
  const [multiplyFactorFU, setMultiplyFactorFU] = useState(0);

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
  };

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

  useEffect(() => {
    const intervalId = setInterval(moneyEvery1s, 1000);

    return () => {
      clearInterval(intervalId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [factoryUpgradeBought, moneyUpgradeValue, multiplyFactorFU, muted]);

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
          top={"40%"}
          right={2}
        />
      </Box>
    </>
  );
}
