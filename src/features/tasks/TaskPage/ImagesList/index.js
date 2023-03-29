import { useState } from "react";
import { useEffect } from "react";
import { Wrapper } from "../../../../common/Wrapper";
import useFirestore from "../../useFirestore";
import Carousel from "./Carousel";
import { StyledImagesList, Image, ImageWrapper } from "./styled";
import { motion } from "framer-motion";

const ImagesList = ({ taskId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const { docs } = useFirestore("images");

  useEffect(() => {
    setImages(docs);
  }, [docs]);

  const filteredImages = images
    .filter((image) => image.taskId === taskId)
    .reverse();

  return (
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
  );
};

export default ImagesList;
