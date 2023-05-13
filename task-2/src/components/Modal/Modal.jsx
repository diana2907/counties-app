import { Overlay, ModalWindow, Image } from "./Modal.styled";

export const Modal = ({ image, closeModalOverlay }) => {
  return (
    <Overlay onClick={closeModalOverlay}>
      <ModalWindow>
        <Image src={image} alt="title" />
      </ModalWindow>
    </Overlay>
  );
};
