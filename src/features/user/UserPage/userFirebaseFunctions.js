import { updateProfile } from "firebase/auth";
import { auth } from "../../../config/firebase";

export const updateFirebaseProfile = async (updateData) => {
  console.log(updateData);
  updateProfile(auth.currentUser, updateData);
};
