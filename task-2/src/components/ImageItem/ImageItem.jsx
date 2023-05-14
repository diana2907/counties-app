import { Image, ButtonDelete, ImageWrapper } from "./ImageItem.styled";
import { Modal } from "components/Modal/Modal";
import { useState } from "react";

export const ImageItem = ({ item, deleteImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeClickOverlay = (evt) => {
    if (evt.currentTarget === evt.target) {
      toggleModal();
    }
  };

  return (
    <>
      <ImageWrapper isModalOpen={isModalOpen}>
        <Image src={item.image} alt="title" onClick={toggleModal} />
      </ImageWrapper>
      <ButtonDelete type="button" onClick={() => deleteImage(item.id)}>
        X
      </ButtonDelete>
      {isModalOpen && (
        <Modal
          closeModal={toggleModal}
          closeModalOverlay={closeClickOverlay}
          image={item.image}
        />
      )}
    </>
  );
};
