import { useState, useRef } from "react";
import { StyledForm, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { Input } from "../Input";
import { Wrapper } from "../../../../common/Wrapper";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../../config/firebase";

const Form = () => {
  const [taskContent, setTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => inputRef.current.focus();

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const contentTrimmed = taskContent.trim();

    if (contentTrimmed) {
      dispatch(addTask(contentTrimmed));
    }

    setTaskContent("");
    focusInput();
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={onFormSubmit}>
        <Input
          ref={inputRef}
          placeholder="New task..."
          value={taskContent}
          onChange={({ target }) => setTaskContent(target.value)}
        />
        <Button>Add new task</Button>
      </StyledForm>
    </Wrapper>
  );
};

export default Form;
