import { Box, IconButton } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ObjectiveShapeProps {
  icon: ReactElement;
  icon2?: ReactElement;
  description: string;
  color?: string;
  cost: number;
  functionToRun?: () => void; 
  buttonColor?: string;
  money: number;
}

export default function ObjectiveShape({
  icon,
  icon2,
  description,
  color,
  cost,
  functionToRun,
  buttonColor,
  money,
}: ObjectiveShapeProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex">
        <IconButton
          colorScheme={buttonColor}
          aria-label="objective"
          icon={icon}
          onClick={functionToRun}
          fontSize="80px"
          size="xl"
          color={color}
          isDisabled={(money < cost)}
        />
        <IconButton
          colorScheme={buttonColor}
          aria-label="objective"
          icon={icon2}
          onClick={functionToRun}
          fontSize="80px"
          size="xl"
          color={color}
          isDisabled={(money < cost)}
        />
      </Box>
      <Box fontSize='20px'>{description}</Box>
      <Box fontSize='18px' fontWeight={300}>Cost: {cost.toLocaleString()} gold coins</Box>
    </Box>
  );
}
