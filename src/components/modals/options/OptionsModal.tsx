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
  FormControl,
  FormLabel,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { FaGear } from "react-icons/fa6";

interface OptionsModalProps {
  toggleMute: () => void;
  muted: boolean;
  backgroundMusicVolume: number;
  setBackgroundMusicVolume: React.Dispatch<React.SetStateAction<number>>;
  clickSoundVolume: number;
  setClickSoundVolume: React.Dispatch<React.SetStateAction<number>>;
  manyCoinsVolume: number;
  setManyCoinsVolume: React.Dispatch<React.SetStateAction<number>>;
  animation: boolean;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OptionsModal({
  toggleMute,
  muted,
  backgroundMusicVolume,
  setBackgroundMusicVolume,
  clickSoundVolume,
  setClickSoundVolume,
  manyCoinsVolume,
  setManyCoinsVolume,
  animation,
  setAnimation,
}: OptionsModalProps) {

  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <>
      <IconButton
        colorScheme="blue"
        aria-label="Volume on/off"
        icon={<FaGear />}
        fontSize="20px"
        size="sm"
        position="absolute"
        top={"50%"}
        right={2}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="24px">Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormLabel htmlFor="email-alerts" mb="0" fontSize="20px">
                Mute sounds
              </FormLabel>
              <Switch onChange={toggleMute} isChecked={muted} />
            </FormControl>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pt="10px"
            >
              <FormLabel htmlFor="email-alerts" mb="0" fontSize="20px">
                Disable title and toaster animations
              </FormLabel>
              <Switch
                onChange={()=> setAnimation(!animation)}
                isChecked={!animation}
              />
            </FormControl>
            <Box fontSize="24px" pt='25px' fontWeight='400' display='flex' justifyContent='center' mb='-10px'>Volume</Box>
            <FormControl display="flex" alignItems="center" pt="10px">
              <FormLabel
                htmlFor="email-alerts"
                mb="0"
                width="200px"
                fontSize="20px"
              >
                Music
              </FormLabel>
              <Slider
                aria-label="slider-ex-1"
                defaultValue={backgroundMusicVolume}
                min={0.0}
                max={1}
                step={0.1}
                onChange={(value) => setBackgroundMusicVolume(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb bg="blue.500" />
              </Slider>
            </FormControl>
            <FormControl display="flex" alignItems="center" pt="10px">
              <FormLabel
                htmlFor="email-alerts"
                mb="0"
                width="200px"
                fontSize="20px"
              >
                Click Sound
              </FormLabel>
              <Slider
                aria-label="slider-ex-1"
                defaultValue={clickSoundVolume}
                min={0.0}
                max={1}
                step={0.1}
                onChange={(value) => setClickSoundVolume(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb bg="blue.500" />
              </Slider>
            </FormControl>
            <FormControl display="flex" alignItems="center" pt="10px">
              <FormLabel
                htmlFor="email-alerts"
                mb="0"
                width="200px"
                fontSize="20px"
              >
                Factory Sound
              </FormLabel>
              <Slider
                aria-label="slider-ex-1"
                defaultValue={manyCoinsVolume}
                min={0.0}
                max={1}
                step={0.1}
                onChange={(value) => setManyCoinsVolume(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb bg="blue.500" />
              </Slider>
            </FormControl>
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
