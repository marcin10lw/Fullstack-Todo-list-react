import React, { useState, useRef } from "react";
import { StyledForm, NewTask, Button} from "./styled";

const Form = ({addNewTask}) => {
  const [taskContent, setTaskContent] = useState("");
  const inputRef = useRef(null);
  
  const focusInput = () => {
    return inputRef.current.focus();
  }

  const onInputChange = (event) => {
    setTaskContent(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = taskContent.trim();
    if (contentTrimmed === "") {
      return;
    }

    addNewTask(contentTrimmed);
    setTaskContent("");
    focusInput();
  }
  return (
    <StyledForm onSubmit={onFormSubmit} >
      <NewTask
        ref={inputRef}
        placeholder="Co jest do zrobienia?"
        value={taskContent}
        onChange={onInputChange}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
