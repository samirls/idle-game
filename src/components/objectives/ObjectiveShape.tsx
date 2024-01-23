import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ObjectiveShapeProps {
  icon: ReactElement;
  icon2?: ReactElement;
  description: string;
  color?: string;
  cost?: number;
}

export default function ObjectiveShape({icon, icon2, description, color, cost}: ObjectiveShapeProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box fontSize="80px" color={color} display='flex'>
        {icon}
        {icon2}
      </Box>
      <Box fontWeight={600}>{description}</Box>
      <Box>Cost: {cost}</Box>
    </Box>
  );
}
