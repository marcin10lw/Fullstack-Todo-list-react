import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";

export const addTaskToFirebase = async (content) => {
  await addDoc(collection(db, "tasks"), {
    userId: auth.currentUser.uid,
    content,
    noteContent: "",
    done: false,
    date: new Date(),
    deadline: {
      deadlineDate: "",
    },
  });
};
