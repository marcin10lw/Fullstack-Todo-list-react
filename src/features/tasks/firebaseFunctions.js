import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { auth, db, storage } from "../../config/firebase";

export const toggleFirebaseTaskDone = async (id, done) => {
  await updateDoc(doc(db, "tasks", id), {
    done: !done,
  });
};

export const deleteFirebaseDoc = async (id, collectionName) => {
  await deleteDoc(doc(db, collectionName, id));
};

export const deleteFirebaseDocsByTask = async (collectionName, images) => {
  await images.forEach((image) => {
    deleteDoc(doc(db, collectionName, image.id));
  });
};

export const updateFirebaseDoc = async (id, updatedProp) => {
  const key = Object.keys(updatedProp)[0];
  const value = Object.values(updatedProp)[0];
  await updateDoc(doc(db, "tasks", id), {
    [key]: value,
  });
};

export const deleteFirebaseFile = async (folder, name) => {
  const fileRef = ref(storage, `${folder}/${auth.currentUser.uid}/${name}`);
  await deleteObject(fileRef);
};

export const deleteFirebaseFilesByTask = async (folder, images) => {
  await images.forEach((image) => {
    const fileRef = ref(
      storage,
      `${folder}/${auth.currentUser.uid}/${image.name}`
    );
    deleteObject(fileRef);
  });
};
