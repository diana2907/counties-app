import { ImageItem } from "../ImageItem/ImageItem";
import { GalleryList, Item } from "./ImagesList.styled";

export const ImagesList = ({ images, deleteImage }) => {
  return (
    <GalleryList>
      {images.map((item) => (
        <Item key={item.id}>
          <ImageItem deleteImage={deleteImage} item={item} />
        </Item>
      ))}
    </GalleryList>
  );
};
