import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth, db } from "../../config/firebase";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  const dispatch = useDispatch();

  const tasksRef = collection(db, collectionName);

  useEffect(() => {
    const queryTasks = query(
      tasksRef,
      where("userId", "==", auth.currentUser.uid)
    );
    const unsub = onSnapshot(queryTasks, (snapshot) => {
      let docData = [];

      snapshot.forEach((doc) => {
        docData.push({ ...doc.data(), id: doc.id });
      });
      setDocs(docData);
    });

    return () => unsub();
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
