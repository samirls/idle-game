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

export default function GameDisplay() {
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

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        fontSize="22px"
        fontWeight={600}
      >
        Actual Objective
      </Box>
      <Box pt="25px">
        {objective1Bought && (
          <ObjectiveShape
            icon={<FcDiploma2 />}
            description="University Degree"
            cost={500}
          />
        )}
        {objective2Bought && (
          <ObjectiveShape
            icon={<GiGoldMine />}
            description="Mine License"
            color="brown"
          />
        )}
        {objective3Bought && (
          <ObjectiveShape
            icon={<FaCar />}
            description="Old Car"
            color="blue.200"
          />
        )}
        {objective4Bought && (
          <ObjectiveShape
            icon={<BsFillHouseFill />}
            description="Old House"
            color="gray.300"
          />
        )}
        {objective5Bought && (
          <ObjectiveShape
            icon={<FaCar />}
            description="Luxury Car"
            color="red"
          />
        )}
        {objective6Bought && (
          <ObjectiveShape
            icon={<BsFillHouseFill />}
            icon2={<GiHomeGarage />}
            description="Luxury House"
          />
        )}
        {objective7Bought && (
          <ObjectiveShape
            icon={<MdOutlineScience />}
            description="Hire Scientists"
            color="green.400"
          />
        )}
        {objective8Bought && (
          <ObjectiveShape
            icon={<GiCongress />}
            description="Influence in the Congress"
            color="gray"
          />
        )}
        {objective9Bought && (
          <ObjectiveShape
            icon={<GiGoldStack />}
            description="Gold Factory License"
            color="yellow.300"
          />
        )}
        {objective10Bought && (
          <ObjectiveShape
            icon={<LiaFighterJetSolid />}
            description="Private Plane"
          />
        )}
        {objective11Bought && (
          <ObjectiveShape
            icon={<GiTrophyCup />}
            description="Win"
            color="yellow.300"
          />
        )}
      </Box>
      <Box display='flex' justifyContent='center' pt="20px">
        {objective1Bought && <Image src="/img/poor-1.webp" alt="image" width="400" height="100"/>}
        {objective2Bought && <Image src="/img/poor-2.jpg" alt="image" width="400" height="100"/>}
        {objective3Bought && <Image src="/img/poor-3.jpg" alt="image" width="400" height="100"/>}
        {objective4Bought && <Image src="/img/poor-4.webp" alt="image" width="400" height="100"/>}
        {objective5Bought && <Image src="/img/poor-5.jpg" alt="image" width="400" height="100"/>}
        {objective6Bought && <Image src="/img/poor-6.webp" alt="image" width="400" height="100"/>}
        {objective7Bought && <Image src="/img/poor-7.jpg" alt="image" width="400" height="100"/>}
        {objective8Bought && <Image src="/img/poor-8.jpg" alt="image" width="400" height="100"/>}
      </Box>
    </Box>
  );
}
