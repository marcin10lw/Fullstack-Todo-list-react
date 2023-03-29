import { useState } from "react";
import { useEffect } from "react";
import { Wrapper } from "../../../../common/Wrapper";
import useFirestore from "../../useFirestore";
import { ListItem, StyledImagesList, Image, ImageWrapper } from "./styled";

const ImagesList = ({ taskId }) => {
  const [images, setImages] = useState([]);
  const { docs } = useFirestore("images");

  useEffect(() => {
    setImages(docs);
  }, [docs]);

  const filteredImages = images.filter((image) => image.taskId === taskId);

  return (
    <Wrapper>
      <StyledImagesList>
        {filteredImages.map((image) => (
          <ListItem key={image.id}>
            <ImageWrapper>
              <Image src={image.url} alt="storage image" />
            </ImageWrapper>
          </ListItem>
        ))}
      </StyledImagesList>
    </Wrapper>
  );
};

export default ImagesList;
