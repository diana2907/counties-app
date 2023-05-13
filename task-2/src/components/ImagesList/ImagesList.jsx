import { images } from "../../data/images";
import { ImageItem } from "../ImageItem/ImageItem";
import { GalleryList, Item } from "./ImagesList.styled";

export const ImagesList = () => {
  return (
    <GalleryList>
      {images.map((item) => (
        <Item key={item.image}>
          <ImageItem item={item} />
        </Item>
      ))}
    </GalleryList>
  );
};
