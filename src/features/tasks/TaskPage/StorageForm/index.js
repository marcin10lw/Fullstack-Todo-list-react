import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
  listAll,
} from "firebase/storage";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { storage } from "../../../../config/firebase";

const StorageForm = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imagesList, setImagesList] = useState([]);
  console.log(imagesList);
  const imageListRef = ref(storage, "images/");
  useEffect(() => {
    (async () => {
      const response = await listAll(imageListRef);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) =>
          setImagesList((prev) => [...prev, url])
        );
      });
    })();
  }, []);

  const uploadFile = async () => {
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    await uploadBytes(imageRef, imageUpload);
    alert("image uploaded");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!imageUpload) return;

    uploadFile();
  };

  return (
    <>
      <h1>{progress} %</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="file"
          onChange={({ target }) => setImageUpload(target.files[0])}
        />
        <button>Upload</button>
      </form>
      {imagesList.map((url) => (
        <img src={url} />
      ))}
    </>
  );
};

export default StorageForm;
