import { Form, Input, EditButton, Overlay, EditTaskMessage } from "./styled";
import { SaveButton } from "../SaveButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../tasksSlice";
import { ErrorMessage } from "../ErrorMessage";

const EditContent = ({ task }) => {
  const dispatch = useDispatch();

  const [newTaskContent, setNewTaskContent] = useState(task.content);
  const [showEditWindow, setShowEditWindow] = useState(false);
  const [error, setError] = useState(false);

  const onTaskContentChange = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      setError(true);
      return;
    }
    dispatch(
      updateTask({ id: task.id, updatedProp: { ["content"]: newTaskContent } })
    );
    setShowEditWindow(false);
    setError(false);
  };

  const onSaveTaskContent = () => {};

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
