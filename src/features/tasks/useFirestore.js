import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth, db } from "../../config/firebase";
import { setStatus, setTasks } from "./tasksSlice";

const useFirestore = (collectionName) => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const tasksRef = collection(db, collectionName);

  useEffect(() => {
    dispatch(setStatus("loading"));

    const queryTasks = query(
      tasksRef,
      where("userId", "==", auth.currentUser.uid)
    );
    const unsub = onSnapshot(queryTasks, (snapshot) => {
      let docData = [];

      snapshot.forEach((doc) => {
        docData.push({ ...doc.data(), id: doc.id });
      });
      setData(docData);
      dispatch(setStatus("success"));
    });

    return () => unsub();
  }, []);

  return data;
};

export default useFirestore;
