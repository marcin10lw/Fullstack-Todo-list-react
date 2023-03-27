import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";
import { auth, storage } from "../../../../config/firebase";
import { addFirebaseDoc } from "../../firebaseFunctions";
// import useStorage from "../useStorage";
import { AddFile, AddFileInput, ErrorText, Label } from "./styled";

const StorageForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);

  const checkIsAllowedType = (type) =>
    ["image/jpeg", "image/png"].includes(type);

  const onInputChange = ({ target }) => {
    const inputFile = target.files[0];

    if (inputFile && checkIsAllowedType(inputFile.type)) {
      setFile(inputFile);
      setError(false);

      const uniqueName = `${inputFile.name}${v4()}`;
      console.log(uniqueName);
      const storageRef = ref(storage, `images/${uniqueName}`);

      const uploadTask = uploadBytesResumable(storageRef, inputFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          await addFirebaseDoc(
            { name: uniqueName, url, userId: auth.currentUser.uid },
            "images"
          );
        }
      );
    } else {
      setFile(null);
      setError(true);
    }
  };

  return (
    <form>
      <Label>
        {error ? (
          <ErrorText error>File must be an image</ErrorText>
        ) : (
          <span>Add an image</span>
        )}
        <AddFile />
        <AddFileInput type="file" onChange={onInputChange} />
      </Label>
    </form>
  );
};

export default StorageForm;
