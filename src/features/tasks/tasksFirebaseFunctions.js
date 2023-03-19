import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
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
    deadline: {
      deadlineDate: "",
    },
  });
};

export const getFirebaseTasks = async () => {
  let tasks = [];
  const querySnapshot = await getDocs(collection(db, "tasks"));
  querySnapshot.forEach((doc) => {
    tasks.push({ ...doc.data(), id: doc.id });
  });

  return tasks;
};

export const toggleFirebaseTaskDone = async (id, done) => {
  await updateDoc(doc(db, "tasks", id), {
    done: !done,
  });
};

export const deleteFirebaseTask = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
};
