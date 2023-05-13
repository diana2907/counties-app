import { useState } from "react";
import { Image } from "./ImageItem.styled";
import { Modal } from "components/Modal/Modal";

export const ImageItem = ({ item }) => {
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
      <Image src={item.image} alt="title" onClick={toggleModal} />
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
