import {
  Form,
  Input,
  SaveNewContent,
  EditButton,
  Overlay,
  EditTaskMessage,
} from "./styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTaskContent } from "../../tasksSlice";

const EditContent = ({ task }) => {
  const [newTaskContent, setNewTaskContent] = useState(task.content);
  const [showEditWindow, setShowEditWindow] = useState(false);

  const dispatch = useDispatch();

  const onTaskContentChange = (event) => {
    event.preventDefault();

    dispatch(editTaskContent({ id: task.id, newContent: newTaskContent }));
  };

  return (
    <>
      <EditButton onClick={() => setShowEditWindow(true)}>Edytuj</EditButton>
      <Overlay onClick={() => setShowEditWindow(false)} show={showEditWindow} />
      <Form onSubmit={onTaskContentChange} show={showEditWindow}>
        <EditTaskMessage>Edytuj tytuł zadania</EditTaskMessage>
        <Input
          onChange={({ target }) => setNewTaskContent(target.value)}
          value={newTaskContent}
        />
        <SaveNewContent onClick={() => setShowEditWindow(false)}>
          Zapisz
        </SaveNewContent>
      </Form>
    </>
  );
};

export default EditContent;
