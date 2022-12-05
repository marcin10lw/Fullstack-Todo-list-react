import React, { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [taskContent, setTaskContent] = useState("");
  
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
  }
  return (
    <form className="form" onSubmit={onFormSubmit} >
      <input
        className="form__newTask"
        placeholder="Co jest do zrobienia?"
        value={taskContent}
        onChange={onInputChange}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
