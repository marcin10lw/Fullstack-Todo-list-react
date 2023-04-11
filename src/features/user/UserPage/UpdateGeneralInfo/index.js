import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../auth/authSlice";
import {
  checkIsAllowedFileSize,
  checkIsAllowedFileType,
} from "../../../../common/checkIsAllowedFile";
import {
  ProfilePicture,
  ShadowBackdrop,
  ImageWrapper,
  FileInput,
  AddIcon,
  UpdateForm,
  UpdateFileButton,
  ProfilePlaceholder,
  UpdateGrid,
  FileInfo,
  UserNameInput,
} from "./styled";
import { auth, storage } from "../../../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Wrapper } from "../../../../common/Wrapper";

const UpdateGeneralInfo = () => {
  const [fileError, setFileError] = useState(false);
  const [file, setFile] = useState(null);
  const user = useSelector(selectUser);

  const currentUser = auth.currentUser;

  const [newUserName, setnewUserName] = useState(user.displayName);

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

    if (file) {
      const uniqueName = `${file.name}${v4()}`;
      const storageRef = ref(
        storage,
        `profile/${auth.currentUser.uid}/${uniqueName}`
      );

      try {
        const snapshot = await uploadBytes(storageRef, file);
        const photoURL = await getDownloadURL(snapshot.ref);
        updateProfile(currentUser, {
          photoURL,
          displayName: newUserName,
        });
        window.location.reload();
      } catch (error) {
        toast.error("Couldn't update picture");
      }
    } else {
      updateProfile(currentUser, {
        photoURL: currentUser.photoURL,
        displayName: newUserName,
      });
      window.location.reload();
    }
  };

  return (
    <Wrapper>
      <UpdateForm onSubmit={onFormSubmit}>
        <UpdateGrid>
          <label>
            <ImageWrapper>
              {auth.currentUser.photoURL ? (
                <ProfilePicture src={auth.currentUser.photoURL} />
              ) : (
                <ProfilePlaceholder />
              )}
              <AddIcon />
              <ShadowBackdrop />
            </ImageWrapper>

            {file ? (
              <FileInfo>
                {file.name.slice(15) === ""
                  ? file.name.slice(0, 15)
                  : `${file.name.slice(0, 15)}...`}
              </FileInfo>
            ) : fileError ? (
              <FileInfo error>Wrong file format/size</FileInfo>
            ) : (
              <FileInfo>Choose jpeg/png file ( max 2MB )</FileInfo>
            )}
            <FileInput type="file" onChange={onInputChange} />
          </label>

          <label>
            <span>Username</span>
            <UserNameInput
              value={newUserName}
              onChange={({ target }) => setnewUserName(target.value)}
              required
            />
          </label>
        </UpdateGrid>

        <UpdateFileButton>Update</UpdateFileButton>
      </UpdateForm>
    </Wrapper>
  );
};

export default UpdateGeneralInfo;
