"use client";

import { Box } from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import { FcDiploma2 } from "react-icons/fc";
import { BsFillHouseFill } from "react-icons/bs";
import { LiaFighterJetSolid } from "react-icons/lia";
import { GiHomeGarage } from "react-icons/gi";
import { GiGoldStack } from "react-icons/gi";
import { GiCongress } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlineScience } from "react-icons/md";
import { useState } from "react";
import { GiGoldMine } from "react-icons/gi";
import ObjectiveShape from "./objectives/ObjectiveShape";
import Image from "next/image";
import { kalam } from "@/app/ui/fonts";

interface GameDisplayProps {
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  setMineLicense: React.Dispatch<React.SetStateAction<boolean>>;
  setGoldFactoryLicense: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameDisplay({
  money,
  setMoney,
  setMineLicense,
  setGoldFactoryLicense,
}: GameDisplayProps) {
  const [objective1Bought, setObjective1Bought] = useState(true);
  const [objective2Bought, setObjective2Bought] = useState(false);
  const [objective3Bought, setObjective3Bought] = useState(false);
  const [objective4Bought, setObjective4Bought] = useState(false);
  const [objective5Bought, setObjective5Bought] = useState(false);
  const [objective6Bought, setObjective6Bought] = useState(false);
  const [objective7Bought, setObjective7Bought] = useState(false);
  const [objective8Bought, setObjective8Bought] = useState(false);
  const [objective9Bought, setObjective9Bought] = useState(false);
  const [objective10Bought, setObjective10Bought] = useState(false);
  const [objective11Bought, setObjective11Bought] = useState(false);

  const objective1 = () => {
    setMoney(money - 500);
    setObjective1Bought(false);
    setObjective2Bought(true);
  };

  const objective2 = () => {
    setMoney(money - 1000);
    setObjective2Bought(false);
    setObjective3Bought(true);
    setMineLicense(true);
  };

  const objective3 = () => {
    setMoney(money - 3000);
    setObjective3Bought(false);
    setObjective4Bought(true);
  };

  const objective4 = () => {
    setMoney(money - 10000);
    setObjective4Bought(false);
    setObjective5Bought(true);
  };

  const objective5 = () => {
    setMoney(money - 25000);
    setObjective5Bought(false);
    setObjective6Bought(true);
  };

  const objective6 = () => {
    setMoney(money - 75000);
    setObjective6Bought(false);
    setObjective7Bought(true);
  };

  const objective7 = () => {
    setMoney(money - 100000);
    setObjective7Bought(false);
    setObjective8Bought(true);
    setGoldFactoryLicense(true);
  };

  const objective8 = () => {
    setMoney(money - 1000000);
    setObjective8Bought(false);
    setObjective9Bought(true);
  };

  const objective9 = () => {
    setMoney(money - 10000000);
    setObjective9Bought(false);
    setObjective10Bought(true);
  };

  const objective10 = () => {
    setMoney(money - 100000000);
    setObjective10Bought(false);
    setObjective11Bought(true);
  };

  const objective11 = () => {
    setMoney(money - 1000000000);
    setObjective11Bought(false);
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        fontSize="30px"
        fontWeight={600}
        className={kalam.className}
      >
        Actual Objective
      </Box>
      <Box pt="25px">
        {objective1Bought && (
          <ObjectiveShape
            icon={<FcDiploma2 />}
            description="University Degree"
            cost={500}
            functionToRun={objective1}
            buttonColor="orange"
            money={money}
          />
        )}
        {objective2Bought && (
          <ObjectiveShape
            icon={<GiGoldMine />}
            description="Mine License"
            color="yellow"
            cost={1000}
            functionToRun={objective2}
            buttonColor="orange"
            money={money}
          />
        )}
        {objective3Bought && (
          <ObjectiveShape
            icon={<FaCar />}
            description="Car"
            color="blue.200"
            cost={3000}
            functionToRun={objective3}
            money={money}
          />
        )}
        {objective4Bought && (
          <ObjectiveShape
            icon={<BsFillHouseFill />}
            description="House"
            color="gray.500"
            cost={10000}
            functionToRun={objective4}
            buttonColor="gray"
            money={money}
          />
        )}
        {objective5Bought && (
          <ObjectiveShape
            icon={<MdOutlineScience />}
            description="Hire Scientists"
            color="green.600"
            cost={25000}
            functionToRun={objective5}
            buttonColor="cyan"
            money={money}
          />
        )}
        {objective6Bought && (
          <ObjectiveShape
            icon={<GiCongress />}
            description="Influence in the Congress"
            color="white"
            cost={75000}
            functionToRun={objective6}
            buttonColor="orange"
            money={money}
          />
        )}
        {objective7Bought && (
          <ObjectiveShape
            icon={<GiGoldStack />}
            description="Gold Factory License"
            color="yellow"
            cost={100000}
            functionToRun={objective7}
            buttonColor="orange"
            money={money}
          />
        )}
        {objective8Bought && (
          <ObjectiveShape
            icon={<FaCar />}
            description="Luxury Car"
            color="red"
            cost={1000000}
            functionToRun={objective8}
            buttonColor="gray"
            money={money}
          />
        )}
        {objective9Bought && (
          <ObjectiveShape
            icon={<BsFillHouseFill />}
            icon2={<GiHomeGarage />}
            description="Luxury House"
            cost={10000000}
            functionToRun={objective9}
            buttonColor="gray"
            money={money}
          />
        )}
        {objective10Bought && (
          <ObjectiveShape
            icon={<LiaFighterJetSolid />}
            description="Private Plane"
            cost={100000000}
            functionToRun={objective10}
            buttonColor="cyan"
            money={money}
          />
        )}
        {objective11Bought && (
          <ObjectiveShape
            icon={<GiTrophyCup />}
            description="Billionaire"
            color="yellow"
            cost={1000000000}
            functionToRun={objective11}
            buttonColor="orange"
            money={money}
          />
        )}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        pt="20px"
        position="relative"
        width="100%"
        height="300px"
        borderRadius="12px"
      >
        {money >= 0 && money < 10 && (
          <Image src="/img/poor-1.webp" alt="image" fill />
        )}
        {money >= 10 && money < 100 && (
          <Image src="/img/poor-2.jpg" alt="image" fill />
        )}
        {money >= 100 && money < 500 && (
          <Image src="/img/poor-3.jpg" alt="image" fill />
        )}
        {money >= 500 && money < 1000 && (
          <Image src="/img/poor-4.webp" alt="image" fill />
        )}
        {money >= 1000 && money < 4000 && (
          <Image src="/img/poor-5.jpg" alt="image" fill />
        )}
        {money >= 4000 && money < 8000 && (
          <Image src="/img/poor-6.webp" alt="image" fill />
        )}
        {money >= 8000 && money < 20000 && (
          <Image src="/img/poor-7.jpg" alt="image" fill />
        )}
        {money >= 20000 && money < 80000 && (
          <Image src="/img/poor-8.jpeg" alt="image" fill />
        )}
        {money >= 80000 && money < 240000 && (
          <Image src="/img/poor-9.webp" alt="image" fill />
        )}
        {money >= 240000 && money < 720000 && (
          <Image src="/img/poor-10.jpg" alt="image" fill />
        )}
        {money >= 720000 && money < 1400000 && (
          <Image src="/img/poor-11.jpeg" alt="image" fill />
        )}
        {money >= 1400000 && money < 8000000 && (
          <Image src="/img/poor-12.webp" alt="image" fill />
        )}
        {money >= 8000000 && money < 16000000 && (
          <Image src="/img/poor-13.jpg" alt="image" fill />
        )}
        {money >= 16000000 && money < 500000000 && (
          <Image src="/img/poor-14.jpg" alt="image" fill />
        )}
        {money >= 500000000 && (
          <Image src="/img/poor-15.jpg" alt="image" fill />
        )}
      </Box>
    </Box>
  );
}
