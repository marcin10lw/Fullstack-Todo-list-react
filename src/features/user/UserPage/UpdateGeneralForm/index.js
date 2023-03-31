import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Wrapper } from "../../../../common/Wrapper";
import { auth } from "../../../../config/firebase";
import { selectUser } from "../../../auth/authSlice";
import useStorage from "../../../useStorage";
import { updateFirebaseProfile } from "../userFirebaseFunctions";
import {
  PhotoWrapper,
  PhotoDummyIcon,
  UpdateFrom,
  UploadFileInput,
  Photo,
  UpdateGrid,
  LabelText,
  Input,
  UploadFileIcon,
} from "./styled";

const UpdateGeneralForm = () => {
  const user = useSelector(selectUser);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(false);
  const [data, setData] = useState({});

  const { progress, error, url } = useStorage(file, "profile");

  useEffect(() => {
    setFile(null);
    setData((data) => ({ ...data, photoURL: url }));
  }, [url]);

  console.log(data);

  const checkIsAllowedType = (type) =>
    ["image/jpeg", "image/png"].includes(type);

  const onChangeFile = ({ target }) => {
    const inputFile = target.files[0];

    if (inputFile && checkIsAllowedType(inputFile.type)) {
      setFile(inputFile);
      setFileError(false);
    } else {
      setFile(null);
      setFileError(true);
    }
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (!data.photoURL && !data.displayName) return;

    try {
      await updateFirebaseProfile(data);
      toast.success("User data updated successfully");
      window.location.reload();
    } catch (error) {
      toast.success("Couldn't update user's data");
    }
  };

  return (
    <Wrapper>
      <UpdateGrid>
        <PhotoWrapper>
          {user.photoURL ? (
            <Photo src={user.photoURL} alt="user profile" />
          ) : (
            <PhotoDummyIcon />
          )}
        </PhotoWrapper>

        <UpdateFrom onSubmit={onFormSubmit}>
          <p>
            {progress !== 0 && progress < 100 ? (
              <span>Loading: {Math.round(progress)}%</span>
            ) : (
              <label>
                {fileError ? (
                  <span>File must be an image (png or jpg)</span>
                ) : (
                  <LabelText>Update picture</LabelText>
                )}
                <UploadFileIcon />
                <UploadFileInput type="file" onChange={onChangeFile} />
              </label>
            )}
          </p>
          <p>
            <label>
              <Input
                type="text"
                placeholder="Username..."
                value={data.displayName}
                onChange={({ target }) =>
                  setData((data) => ({
                    ...data,
                    displayName: target.value,
                  }))
                }
              />
            </label>
          </p>

          <p>
            <button>update</button>
          </p>
        </UpdateFrom>
      </UpdateGrid>
    </Wrapper>
  );
};

export default UpdateGeneralForm;
