import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

export const addFirebaseDoc = async (data, collectionName) => {
  await addDoc(collection(db, collectionName), data);
};

export const toggleFirebaseTaskDone = async (id, done) => {
  await updateDoc(doc(db, "tasks", id), {
    done: !done,
  });
};

export const deleteFirebaseDoc = async (id, collectionName) => {
  await deleteDoc(doc(db, collectionName, id));
};

export const updateFirebaseDoc = async (id, updatedProp) => {
  const key = Object.keys(updatedProp)[0];
  const value = Object.values(updatedProp)[0];
  await updateDoc(doc(db, "tasks", id), {
    [key]: value,
  });
};
