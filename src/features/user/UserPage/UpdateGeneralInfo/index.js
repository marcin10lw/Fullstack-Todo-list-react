import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Wrapper } from "../../../../common/Wrapper";
import { auth } from "../../../../config/firebase";
import { selectUser, setActiveUser } from "../../../auth/authSlice";
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
import UpdatePictureForm from "./UpdatePicureForm";

const UpdateGeneralInfo = () => {
  const user = useSelector(selectUser);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(false);
  const [displayName, setDisplayName] = useState("");

  

  const dispatch = useDispatch();

  



  return (
    <Wrapper>
      <UpdateGrid>
        <UpdatePictureForm />
      </UpdateGrid>
    </Wrapper>
  );
};

export default UpdateGeneralInfo;
