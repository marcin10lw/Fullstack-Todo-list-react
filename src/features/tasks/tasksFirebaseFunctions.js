import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";

export const addFirebaseTask = async (content) => {
  await addDoc(collection(db, "tasks"), {
    userId: auth.currentUser.uid,
    content,
    noteContent: "",
    done: false,
    date: Date(serverTimestamp()),
    deadline: "",
  });
};

export const toggleFirebaseTaskDone = async (id, done) => {
  await updateDoc(doc(db, "tasks", id), {
    done: !done,
  });
};

export const deleteFirebaseTask = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
};

export const updateFirebaseDoc = async (id, updatedProp) => {
  const key = Object.keys(updatedProp)[0];
  const value = Object.values(updatedProp)[0];
  await updateDoc(doc(db, "tasks", id), {
    [key]: value,
  });
};
