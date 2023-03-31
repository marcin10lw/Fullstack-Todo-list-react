import { useEffect, useState } from "react";
import { checkIsAllowedFileType } from "../../../checkIsAllowedFileType";
import useStorage from "../../../useStorage";
import { AddFile, AddFileInput, ErrorText, Label, Form } from "./styled";

const StorageForm = ({ taskId }) => {
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(false);

  const { progress, error, url } = useStorage(file, "images", taskId);

  useEffect(() => {
    setFile(null);
  }, [url]);

  const onInputChange = ({ target }) => {
    const inputFile = target.files[0];

    if (inputFile && checkIsAllowedFileType(inputFile.type)) {
      setFile(inputFile);
      setFileError(false);
    } else {
      setFile(null);
      setFileError(true);
    }
  };

  return (
    <Form>
      {progress !== 0 && progress < 100 ? (
        <Label as="div">
          <span>Uploading: {Math.round(progress)}%</span>
        </Label>
      ) : (
        <Label>
          {fileError ? (
            <ErrorText error>File must be an image</ErrorText>
          ) : (
            <span>Upload an image</span>
          )}
          <AddFile />
          <AddFileInput type="file" onChange={onInputChange} />
        </Label>
      )}
    </Form>
  );
};

export default StorageForm;
