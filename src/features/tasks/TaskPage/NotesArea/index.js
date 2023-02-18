import { useDispatch } from "react-redux";
import { Wrapper } from "../../../../common/Wrapper";
import { addNoteContent } from "../../tasksSlice";
import { StyledNotesArea } from "./styled";

const NotesArea = ({ task }) => {
  const taskId = task.id;
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    const noteValue = target.value;
    dispatch(addNoteContent({ taskId, noteValue }));
  };

  return (
    <Wrapper>
      <StyledNotesArea
        placeholder="Wpisz swoje notatki..."
        value={task.noteContent}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default NotesArea;
