import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { GiTrophyCup } from "react-icons/gi";

interface endingModalProps {
  endingModalOpen: boolean;
}

export default function EndingModal({endingModalOpen}: endingModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (endingModalOpen) {
      onOpen();
    }
  }, [endingModalOpen, onOpen]);

  return (
    <>
      <IconButton
        colorScheme="blue"
        aria-label="Volume on/off"
        icon={<GiTrophyCup />}
        fontSize="20px"
        size="sm"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='24px'>The End!</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize='20'>
            <Box textAlign='justify'><Box fontWeight='700' as='span'>Congratulations for beating the game!</Box> 
            {' '}This is the end, for now... If you enjoined the game, let me know at samirlaguardiaii@gmail.com</Box>
            <Box>Maybe I can make more content...</Box>
            <Box display='flex' justifyContent='center' fontSize='200px' color='yellow.400'><GiTrophyCup /></Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
