import { useState } from "react";
import { AddFile, AddFileInput } from "./styled";

const StorageForm = () => {
  const [file, setFile] = useState(null);

  const checkIsAllowedType = (type) =>
    ["image/jpeg", "image/png"].includes(type);

  console.log(file);
  const onInputChange = ({ target }) => {
    const inputFile = target.files[0];

    if (inputFile && checkIsAllowedType(inputFile.type)) {
      setFile(inputFile);
    } else {
      setFile(null);
    }
  };

  return (
    <>
      <form>
        <label>
          <AddFile />
          <AddFileInput type="file" onChange={onInputChange} />
        </label>
      </form>
    </>
  );
};

export default StorageForm;
