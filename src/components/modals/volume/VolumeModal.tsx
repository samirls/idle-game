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
} from "@chakra-ui/react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

interface VolumeModalProps {
  toggleMute: () => void;
  muted: boolean;
  backgroundMusicVolume: number;
  setBackgroundMusicVolume: React.Dispatch<React.SetStateAction<number>>;
  clickSoundVolume: number;
  setClickSoundVolume: React.Dispatch<React.SetStateAction<number>>;
  manyCoinsVolume: number;
  setManyCoinsVolume: React.Dispatch<React.SetStateAction<number>>;
}

export default function VolumeModal({
  toggleMute,
  muted,
  backgroundMusicVolume,
  setBackgroundMusicVolume,
  clickSoundVolume,
  setClickSoundVolume,
  manyCoinsVolume,
  setManyCoinsVolume,
}: VolumeModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        colorScheme="blue"
        aria-label="Volume on/off"
        icon={muted ? <IoVolumeMute /> : <IoVolumeHigh />}
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
          <ModalHeader fontSize='24px'>Volume Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormLabel htmlFor="email-alerts" mb="0" fontSize='20px'>
                Disable / Enable all sounds
              </FormLabel>
              <Switch onChange={toggleMute} isChecked={!muted} />
            </FormControl>
            <FormControl display="flex" alignItems="center" pt="10px">
              <FormLabel htmlFor="email-alerts" mb="0" width="200px" fontSize='20px'>
                Music
              </FormLabel>
              <Slider
                aria-label="slider-ex-1"
                defaultValue={backgroundMusicVolume}
                min={0}
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
              <FormLabel htmlFor="email-alerts" mb="0" width="200px" fontSize='20px'>
                Click Sound
              </FormLabel>
              <Slider
                aria-label="slider-ex-1"
                defaultValue={clickSoundVolume}
                min={0}
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
              <FormLabel htmlFor="email-alerts" mb="0" width="200px" fontSize='20px'>
                Factory Sound
              </FormLabel>
              <Slider
                aria-label="slider-ex-1"
                defaultValue={manyCoinsVolume}
                min={0}
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
