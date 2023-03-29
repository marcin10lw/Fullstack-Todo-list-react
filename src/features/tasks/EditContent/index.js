import {
  Form,
  Input,
  EditButton,
  EditTaskMessage,
  EditIcon,
  CloseButton,
  CloseButtonIcon,
} from "./styled";
import { SaveButton } from "../TaskPage/SaveButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../tasksSlice";
import { ErrorMessage } from "../TaskPage/ErrorMessage";
import { Backdrop } from "../Backdrop";
import { motion } from "framer-motion";

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

  return (
    <>
      <EditButton onClick={() => setShowEditWindow(true)}>
        <EditIcon />
      </EditButton>
      {showEditWindow && (
        <>
          <Backdrop
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowEditWindow(false)}
          >
            <Form onSubmit={onTaskContentChange}>
              <EditTaskMessage>Edit task content</EditTaskMessage>
              <Input
                placeholder="new task content"
                onChange={({ target }) => setNewTaskContent(target.value)}
                value={newTaskContent}
              />
              <ErrorMessage error={error}>
                Task's content can't be empty
              </ErrorMessage>
              <SaveButton>Save</SaveButton>
              <CloseButton
                type="button"
                onClick={() => setShowEditWindow(false)}
              >
                <CloseButtonIcon />
              </CloseButton>
            </Form>
          </Backdrop>
        </>
      )}
    </>
  );
};

export default EditContent;
