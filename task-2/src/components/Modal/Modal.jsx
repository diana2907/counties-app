import { Overlay, ModalWindow, Image, CloseButton } from "./Modal.styled";

export const Modal = ({ image, closeModalOverlay, closeModal }) => {
  return (
    <Overlay onClick={closeModalOverlay}>
      <ModalWindow>
        <Image src={image} alt="title" />
        <CloseButton onClick={closeModal}>X</CloseButton>
      </ModalWindow>
    </Overlay>
  );
};
