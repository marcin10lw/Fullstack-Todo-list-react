import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop } from "../../../Backdrop";
import { deleteFirebaseFilesByTask } from "../../../firebaseFunctions";
import { selectImages } from "../../../TaskPage/imagesSlice";
import { deleteTask, selectStatus } from "../../../tasksSlice";
import { TaskButton } from "../TaskButton";
import { DeleteTaskWrapper, ConfirmDelete, ButtonsWrapper } from "./styled";
import { Button } from "../../Button";

const DeleteTask = ({ task }) => {
  const [showAlert, setShowAlert] = useState(false);

  const status = useSelector(selectStatus);
  const buttonDisabled = status === "loading";
  const images = useSelector(selectImages);

  const dispatch = useDispatch();

  const taskId = task.id;
  const onDeleteTask = () => {
    const imagesToDelete = images.filter((image) => image.taskId === taskId);

    dispatch(deleteTask(taskId));
    deleteFirebaseFilesByTask("images", imagesToDelete);
  };
  return (
    <>
      <TaskButton
        disabled={buttonDisabled}
        remove={true}
        onClick={() => setShowAlert(true)}
      />
      {showAlert && (
        <Backdrop
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowAlert(false)}
        >
          <DeleteTaskWrapper onClick={(event) => event.stopPropagation()}>
            <ConfirmDelete>
              All files and data for "{task.content}" task will be lost
            </ConfirmDelete>
            <ButtonsWrapper>
              <Button remove onClick={onDeleteTask}>
                Delete
              </Button>
              <Button onClick={() => setShowAlert(false)}>Cancel</Button>
            </ButtonsWrapper>
          </DeleteTaskWrapper>
        </Backdrop>
      )}
    </>
  );
};

export default DeleteTask;
