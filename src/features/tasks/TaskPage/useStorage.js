import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { useEffect } from "react";
import { v4 } from "uuid";
import { auth, storage } from "../../../config/firebase";
import { addFirebaseDoc } from "../firebaseFunctions";

const useStorage = (file, taskId) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!file) return;

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
        setError(true);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(url);
        await addFirebaseDoc(
          {
            url,
            taskId,
            userId: auth.currentUser.uid,
            createdAt: serverTimestamp(),
          },
          "images"
        );
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
