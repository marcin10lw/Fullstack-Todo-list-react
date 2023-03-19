import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { createNameFromEmail } from "./createNameFromEmail";

export const addUserToDatabase = async (user) => {
  await setDoc(doc(db, "users", user.uid), {
    name: user.displayName ? user.displayName : createNameFromEmail(user.email),
    email: user.email,
    userId: user.uid,
    timeStamp: serverTimestamp(),
  });
};
