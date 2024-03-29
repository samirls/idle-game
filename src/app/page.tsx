"use client";

import Upgrades from "@/components/Upgrades";
import { Box, Button, Grid, IconButton } from "@chakra-ui/react";
import Statistics from "@/components/Statistics";
import GameDisplay from "@/components/GameDisplay";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Howl } from "howler";
import { frijole } from "./ui/fonts";
import "animate.css";
import OptionsModal from "@/components/modals/options/OptionsModal";

export default function Home() {
  const toast = useToast();
  const [backgroundMusicVolume, setBackgroundMusicVolume] = useState(0.7);
  const [clickSound, setClickSound] = useState<Howl | null>(null);
  const [clickSoundVolume, setClickSoundVolume] = useState(0.4);
  const [manyCoins, setManyCoins] = useState<Howl | null>(null);
  const [manyCoinsVolume, setManyCoinsVolume] = useState(0.3);
  const [muted, setMuted] = useState(false);
  const [clickPower, setClickPower] = useState(1);
  const [clickPowerMultiplier, setClickPowerMultiplier] = useState(0);
  const [clickPowerToDisplay, setClickPowerToDisplay] = useState(1);
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
  const [animation, setAnimation] = useState(true);


  const clickMoney = useCallback(() => {
    let clickMultiplierUpdated: number;

    if (clickPowerMultiplier === 0) {
      clickMultiplierUpdated = clickPower;
    } else {
      clickMultiplierUpdated = clickPower * clickPowerMultiplier;
    }

    setMoney((prevMoney) => prevMoney + clickMultiplierUpdated);
    setClickPowerToDisplay(clickMultiplierUpdated);

    if (clickSound && !muted) {
      clickSound.play();
    }

    if (animation) {
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
            {`+ ${clickMultiplierUpdated.toLocaleString()} coins`}
          </Box>
        ),
      });
    }

    setSixthUpgradeDelay(true);
    setTimeout(() => {
      setSixthUpgradeDelay(false);
    }, sixthUpgradeDelayTime);
  }, [clickPower, clickPowerMultiplier, setMoney, setClickPowerToDisplay, clickSound, muted, animation, toast, sixthUpgradeDelayTime]);


  const moneyEvery1s = useCallback(() => {
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

      if (animation) {
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
              {`+ ${multiplyFactorFUUpdated.toLocaleString()} coins from factories`}
            </Box>
          ),
        });
      }
    }
  }, [factoryUpgradeBought, moneyUpgradeValue, multiplyFactorFU, setMoney, setMultiplyFactorToDisplay, manyCoins, muted, animation, toast]);


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
    setClickSound(new Howl({ src: ["/coin.mp3"], volume: clickSoundVolume }));
    setManyCoins(
      new Howl({ src: ["/many-coins.mp3"], volume: manyCoinsVolume })
    );

    const backgroundMusic = new Howl({
      src: ["/early-morning.mp3"],
      autoplay: true,
      loop: true,
      volume: backgroundMusicVolume,
      mute: muted,
    });

    return () => {
      backgroundMusic?.stop();
    };
  }, [backgroundMusicVolume, clickSoundVolume, manyCoinsVolume, muted, animation]);

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

  }, [factoryUpgradeBought, moneyUpgradeValue, multiplyFactorFU, muted, moneyUpgradeDelay, manyCoinsVolume, animation, moneyEvery1s]);

  return (
    <>
      <Box 
        display={{ base: "block", lg: "none" }}
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          height='100vh'
          p={10}
          fontSize='2rem'
          textAlign='justify'
        >
          Sorry!This game is not available YET for phones. Please use: Windows, Mac or Linux. Or come here later!
        </Box>
      </Box>
      <Box height="100vh" display={{ base: "none", lg: "block" }}>
        <Box
          display="flex"
          justifyContent="center"
          pt="20px"
          fontSize="46px"
          className={frijole.className}
        >
          <Box
            className={
              animation
                ? "animate__animated animate__tada animate__infinite"
                : ""
            }
          >
            $ Get RiCh $
          </Box>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" pt="50px">
          <Upgrades
            money={money}
            setMoney={setMoney}
            clickPower={clickPower}
            setClickPower={setClickPower}
            clickPowerMultiplier={clickPowerMultiplier}
            setClickPowerMultiplier={setClickPowerMultiplier}
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
            setClickPowerToDisplay={setClickPowerToDisplay}
          />
          <GameDisplay
            money={money}
            setMoney={setMoney}
            setMineLicense={setMineLicense}
            setGoldFactoryLicense={setGoldFactoryLicense}
          />
          <Statistics
            money={money}
            multiplyFactorToDisplay={multiplyFactorToDisplay}
            moneyUpgradeDelay={moneyUpgradeDelay}
            clickPowerToDisplay={clickPowerToDisplay}
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
        <OptionsModal
          toggleMute={toggleMute}
          muted={muted}
          backgroundMusicVolume={backgroundMusicVolume}
          setBackgroundMusicVolume={setBackgroundMusicVolume}
          clickSoundVolume={clickSoundVolume}
          setClickSoundVolume={setClickSoundVolume}
          manyCoinsVolume={manyCoinsVolume}
          setManyCoinsVolume={setManyCoinsVolume}
          animation={animation}
          setAnimation={setAnimation}
        />
      </Box>
    </>
  );
}
