import { ImagesList } from "components/ImagesList/ImagesList";
import { Container, GalleryTitle, Time, TitileWrapper } from "./Gallery.styled";
import { useEffect, useState } from "react";

export const Gallery = () => {
  const addLeadingZero = (value) => {
    const formatDate = value.toString().padStart(2, "0");
    return formatDate;
  };

  const formatTime = () => {
    const currentTime = new Date();
    const day = addLeadingZero(currentTime.getDate());
    const month = addLeadingZero(currentTime.getMonth() + 1);
    const year = currentTime.getFullYear();
    const hours = addLeadingZero(currentTime.getHours());
    const minutes = addLeadingZero(currentTime.getMinutes());

    return day + "." + month + "." + year + " " + hours + ":" + minutes;
  };

  const initialDate = formatTime();
  const [date, setDate] = useState(initialDate);
  useEffect(() => {
    const time = setInterval(function () {
      const currentTime = formatTime(new Date());
      setDate(currentTime);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <Container>
      <TitileWrapper>
        <GalleryTitle>Images Gallery</GalleryTitle>
        <Time>{date}</Time>
      </TitileWrapper>
      <ImagesList />
    </Container>
  );
};
