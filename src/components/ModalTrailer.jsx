import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

export default function ModalTrailer({ isOpen, onClose }) {
  return (
    <>
      <Modal onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="white" />
          <ModalBody bg="black" ></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
