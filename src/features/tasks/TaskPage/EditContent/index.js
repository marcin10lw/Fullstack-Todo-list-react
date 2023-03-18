import {
  Form,
  Input,
  SaveButton,
  EditButton,
  Overlay,
  EditTaskMessage,
  ErrorMessage,
} from "./styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTaskContent } from "../../tasksSlice";

const EditContent = ({ task }) => {
  const dispatch = useDispatch();

  const [newTaskContent, setNewTaskContent] = useState(task.content);
  const [showEditWindow, setShowEditWindow] = useState(false);
  const [error, setError] = useState(false);

  const onTaskContentChange = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") return;
    dispatch(editTaskContent({ id: task.id, newContent: newTaskContent }));
  };

  const onSaveTaskContent = () => {
    if (newTaskContent.trim() === "") {
      setError(true);
      return;
    }
    setShowEditWindow(false);
    setError(false);
  };

  return (
    <>
      <EditButton onClick={() => setShowEditWindow(true)}>
        Edit content
      </EditButton>
      <Overlay onClick={() => setShowEditWindow(false)} show={showEditWindow} />
      <Form onSubmit={onTaskContentChange} show={showEditWindow}>
        <EditTaskMessage>Edit task content</EditTaskMessage>
        <Input
          placeholder="new task content"
          onChange={({ target }) => setNewTaskContent(target.value)}
          value={newTaskContent}
        />
        <ErrorMessage error={error}>Task's content can't be empty</ErrorMessage>
        <SaveButton onClick={onSaveTaskContent}>Save</SaveButton>
      </Form>
    </>
  );
};

export default EditContent;
