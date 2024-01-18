import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import YouTube from 'react-youtube';

export default function ModalTrailer({ isOpen, onClose, trailerId }) {
  return (
    <>
      <Modal onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="white" />
          <ModalBody bg="black" >
            <YouTube
              style={{ height: "80vh"}}
              videoId={trailerId}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  cc_load_policy: 0,
                  fs: 0,
                  iv_load_policy: 0,
                  modestbranding: 0,
                  rel: 0,
                  showinfo: 0,
                },
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
