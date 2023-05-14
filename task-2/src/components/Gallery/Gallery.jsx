import { ImagesList } from "components/ImagesList/ImagesList";
import {
  Container,
  GalleryTitle,
  Time,
  TitileWrapper,
  Quantity,
  RestoreButton,
} from "./Gallery.styled";
import { useEffect, useState } from "react";
import { images } from "../../data/images";
import { formatTime } from "helpers/formatDate";

export const Gallery = () => {
  const initialDate = formatTime();

  const [date, setDate] = useState(initialDate);

  const [imagesList, setImagesList] = useState(() => {
    const savedImages = window.localStorage.getItem("images");
    console.log(savedImages);
    if (savedImages !== null) {
      return JSON.parse(savedImages);
    } else {
      return images;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("images", JSON.stringify(imagesList));
    console.log(imagesList);
  }, [imagesList]);

  useEffect(() => {
    const time = setInterval(function () {
      const currentTime = formatTime(new Date());
      setDate(currentTime);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  const deleteImage = (id) => {
    setImagesList((prevState) => prevState.filter((image) => image.id !== id));
  };

  const restoreImages = () => {
    setImagesList(images);
  };

  return (
    <Container>
      <TitileWrapper>
        <GalleryTitle>Images Gallery</GalleryTitle>
        <Time>{date}</Time>
        <Quantity>Quantity images: {imagesList.length}</Quantity>
      </TitileWrapper>
      <ImagesList deleteImage={deleteImage} images={imagesList} />
      <RestoreButton onClick={restoreImages}>Restore</RestoreButton>
    </Container>
  );
};
