import { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../../../auth/authSlice";
import {
  checkIsAllowedFileSize,
  checkIsAllowedFileType,
} from "../../../../../common/checkIsAllowedFile";
import {
  ProfilePicture,
  ShadowBackdrop,
  ImageWrapper,
  FileInput,
  AddIcon,
  ImageForm,
  UploadFileButton,
  UploadFileIcon,
} from "./styled";
import { auth, storage } from "../../../../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const UpdatePictureForm = () => {
  const [uploadStatus, setUploadStatus] = useState("success");
  const [fileError, setFileError] = useState(false);
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    const inputFile = target.files[0];

    if (
      checkIsAllowedFileType(inputFile.type) &&
      checkIsAllowedFileSize(inputFile.size)
    ) {
      setFile(inputFile);
      setFileError(false);
    } else {
      setFile(null);
      setFileError(true);
    }
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    setUploadStatus("loading");

    const uniqueName = `${file.name}${v4()}`;
    const storageRef = ref(
      storage,
      `profile/${auth.currentUser.uid}/${uniqueName}`
    );
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(snapshot.ref);
      await updateProfile(auth.currentUser, {
        photoURL,
      });
      dispatch(
        setActiveUser({
          ...auth.currentUser,
          photoURL,
        })
      );
      setFile(null);
      window.location.reload();
    } catch (error) {
      setUploadStatus("error");
      toast.error("Couldn't update picture");
    }
  };

  return (
    <ImageForm onSubmit={onFormSubmit}>
      <label>
        <ImageWrapper>
          <ProfilePicture src={auth.currentUser.photoURL} />
          <AddIcon />
          <ShadowBackdrop />
        </ImageWrapper>
        <FileInput type="file" onChange={onInputChange} />
      </label>
      {file && (
        <span>
          {file.name.slice(15) === ""
            ? file.name.slice(0, 15)
            : `${file.name.slice(0, 15)}...`}
        </span>
      )}
      <UploadFileButton disabled={!file}>
        <UploadFileIcon />
      </UploadFileButton>
    </ImageForm>
  );
};

export default UpdatePictureForm;
