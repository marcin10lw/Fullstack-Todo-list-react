import { useState } from "react";
import { useEffect } from "react";
import { Wrapper } from "../../../../common/Wrapper";
import useFirestore from "../../useFirestore";
import Carousel from "./Carousel";
import {
  StyledImagesList,
  Image,
  ImageWrapper,
  RemoveImageIcon,
  RemoveImage,
} from "./styled";
import { motion } from "framer-motion";
import { deleteFirebaseDoc, deleteFirebaseFile } from "../../firebaseFunctions";

const ImagesList = ({ taskId }) => {
  const { docs } = useFirestore("images");
  const [isRemoving, setIsRemoving] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(docs);
  }, [docs]);

  const filteredImages = images
    .filter((image) => image.taskId === taskId)
    .reverse();

  const onRemoveImage = async (event, imageId, name) => {
    event.stopPropagation();

    setIsRemoving(true);
    try {
      await deleteFirebaseDoc(imageId, "images");
      await deleteFirebaseFile("images", name);
    } catch (error) {
      console.error(error);
    }
    setIsRemoving(false);
  };

  return (
    filteredImages.length > 0 && (
      <Wrapper>
        <StyledImagesList>
          {filteredImages.map((image) => (
            <motion.li layout key={image.id}>
              <ImageWrapper onClick={() => setSelectedImage(image.url)}>
                <Image
                  as={motion.img}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, opacity: 0.5 }}
                  src={image.url}
                  alt="storage image"
                />
                <RemoveImage
                  disabled={isRemoving}
                  onClick={(event) =>
                    onRemoveImage(event, image.id, image.name)
                  }
                >
                  <RemoveImageIcon />
                </RemoveImage>
              </ImageWrapper>
            </motion.li>
          ))}
        </StyledImagesList>

        {selectedImage && (
          <Carousel
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </Wrapper>
    )
  );
};

export default ImagesList;
