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
import { ReactElement, useState } from "react";
import { GiGoldMine } from "react-icons/gi";
import ObjectiveShape from "./objectives/ObjectiveShape";
import Image from "next/image";
import { kalam } from "@/app/ui/fonts";
import EndingModal from "./modals/ending/EndingModal";

interface GameDisplayProps {
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  setMineLicense: React.Dispatch<React.SetStateAction<boolean>>;
  setGoldFactoryLicense: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Objective {
  id: number;
  icon: ReactElement;
  icon2?: ReactElement;
  description: string;
  color: string;
  buttonColor?: string;
  cost: number;
  nextObjective?: number;
  grantLicense?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameDisplay({
  money,
  setMoney,
  setMineLicense,
  setGoldFactoryLicense,
}: GameDisplayProps) {
  const [endingModalOpen, setEndingModalOpen] = useState(false);
  const [currentObjective, setCurrentObjective] = useState(1);

  const objectives = [
    {
      id: 1,
      icon: <FcDiploma2 />,
      description: "University Degree",
      color: "orange",
      cost: 500,
      nextObjective: 2,
    },
    {
      id: 2,
      icon: <GiGoldMine />,
      description: "Mine License",
      color: "yellow",
      cost: 3000,
      nextObjective: 3,
      grantLicense: setMineLicense,
    },
    {
      id: 3,
      icon: <FaCar />,
      description: "Car",
      color: "blue.200",
      cost: 5000,
      nextObjective: 4,
    },
    {
      id: 4,
      icon: <BsFillHouseFill />,
      description: "House",
      color: "gray.500",
      cost: 10000,
      buttonColor: "gray",
      nextObjective: 5,
    },
    {
      id: 5,
      icon: <MdOutlineScience />,
      description: "Hire Scientists",
      color: "green.600",
      cost: 25000,
      buttonColor: "cyan",
      nextObjective: 6,
    },
    {
      id: 6,
      icon: <GiCongress />,
      description: "Influence in the Congress",
      color: "white",
      cost: 75000,
      buttonColor: "orange",
      nextObjective: 7,
    },
    {
      id: 7,
      icon: <GiGoldStack />,
      description: "Gold Factory License",
      color: "yellow",
      cost: 120000,
      buttonColor: "orange",
      nextObjective: 8,
      grantLicense: setGoldFactoryLicense,
    },
    {
      id: 8,
      icon: <FaCar />,
      description: "Luxury Car",
      color: "red",
      cost: 1000000,
      buttonColor: "gray",
      nextObjective: 9,
    },
    {
      id: 9,
      icon: <BsFillHouseFill />,
      icon2: <GiHomeGarage />,
      description: "Luxury House",
      color: "black",
      cost: 10000000,
      buttonColor: "gray",
      nextObjective: 10,
    },
    {
      id: 10,
      icon: <LiaFighterJetSolid />,
      description: "Private Plane",
      color: "black",
      cost: 100000000,
      buttonColor: "cyan",
      nextObjective: 11,
    },
    {
      id: 11,
      icon: <GiTrophyCup  />,
      description: "Billionaire",
      color: "yellow",
      cost: 1000000000,
      buttonColor: "orange",
    },
  ];

  const handleObjectiveCompletion = (objective: Objective) => {
    setMoney(money - objective.cost);

    if (objective.grantLicense) {
      objective.grantLicense(true);
    }

    if (objective.nextObjective) {
      setCurrentObjective(objective.nextObjective);
    } else {
      setEndingModalOpen(true);
    }
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
        {objectives.map(
          (objective) =>
            objective.id === currentObjective && (
              <ObjectiveShape
                key={objective.id}
                icon={objective.icon}
                icon2={objective.icon2}
                description={objective.description}
                color={objective.color}
                cost={objective.cost}
                functionToRun={() => handleObjectiveCompletion(objective)}
                buttonColor={objective.buttonColor}
                money={money}
              />
            )
        )}
        {endingModalOpen && (
          <Box display="flex" justifyContent="center">
            <EndingModal endingModalOpen={endingModalOpen} />
          </Box>
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
