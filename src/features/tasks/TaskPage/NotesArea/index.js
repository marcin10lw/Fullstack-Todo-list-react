import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../../../common/Wrapper";
import { addNoteContent, selectTasks } from "../../tasksSlice";
import { StyledNotesArea } from "./styled";

const NotesArea = ({ task }) => {
  const [noteInput, setNoteInput] = useState("");
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    setNoteInput(target.value);
    console.log(noteInput);
    dispatch(addNoteContent(task, noteInput));
  };

  return (
    <Wrapper>
      <StyledNotesArea
        placeholder="Wpisz swoje notatki..."
        value={noteInput}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default NotesArea;
