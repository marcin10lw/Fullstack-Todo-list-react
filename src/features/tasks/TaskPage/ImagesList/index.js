import { useState } from "react";
import { useEffect } from "react";
import useFirestore from "../../useFirestore";

const ImagesList = ({ taskId }) => {
  const [images, setImages] = useState([]);
  const { docs } = useFirestore("images");

  useEffect(() => {
    setImages(docs);
  }, [docs]);

  const filteredImages = images.filter((image) => image.taskId === taskId);

  return (
    <ul>
      {filteredImages.map((image) => (
        <li key={image.id}>
          <img width={200} src={image.url} />
        </li>
      ))}
    </ul>
  );
};

export default ImagesList;
