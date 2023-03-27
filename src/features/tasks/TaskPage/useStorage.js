import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { useEffect } from "react";
import { v4 } from "uuid";
import { auth, storage } from "../../../config/firebase";
import { addFirebaseDoc } from "../firebaseFunctions";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  console.log(file);

  useEffect(() => {
    const uniqueName = `${file.name}${v4()}`;
    const storageRef = ref(storage, `images/${uniqueName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        await addFirebaseDoc({ url, userId: auth.currentUser.id }, "images");
      }
    );
  }, [file]);

  return { progress, url };
};

export default useStorage;
