import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop } from "../../../../../common/Backdrop";
import { deleteFirebaseDocsByTask } from "./deleteFirebaseDocsByTask";
import { deleteFirebaseFilesByTask } from "./deleteFirebaseFilesByTask";
import { selectImagesByTaskId } from "../../../imagesSlice";
import { deleteTask, selectStatus } from "../../../tasksSlice";
import { TaskButton } from "../TaskButton";
import { DeleteTaskWrapper, ConfirmDelete, ButtonsWrapper } from "./styled";
import { Button } from "../../../../../common/Button";

const DeleteTask = ({ task }) => {
  const taskId = task.id;
  const [showAlert, setShowAlert] = useState(false);
  const imagesToDelete = useSelector((state) =>
    selectImagesByTaskId(state, taskId)
  );

  const status = useSelector(selectStatus);
  const buttonDisabled = status === "loading";

  const dispatch = useDispatch();

  const onDeleteTask = () => {
    dispatch(deleteTask(taskId));

    deleteFirebaseFilesByTask("images", imagesToDelete);
    deleteFirebaseDocsByTask("images", imagesToDelete);
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
