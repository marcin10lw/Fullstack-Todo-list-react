import React, { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [taskContent, setTaskContent] = useState("");
  
  const onInputChange = (event) => {
    setTaskContent(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (taskContent.trim()) {
      addNewTask(taskContent.trim());
    }
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
