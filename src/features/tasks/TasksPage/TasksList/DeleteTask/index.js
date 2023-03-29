import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFirebaseFilesByTask } from "../../../firebaseFunctions";
import { selectImages } from "../../../TaskPage/imagesSlice";
import { deleteTask, selectStatus } from "../../../tasksSlice";
import { TaskButton } from "../TaskButton";
import { StyledDeleteTask, ConfirmDelete } from "./styled";

const DeleteTask = ({ taskId }) => {
  const [showAlert, setShowAlert] = useState(false);

  const status = useSelector(selectStatus);
  const buttonDisabled = status === "loading";
  const images = useSelector(selectImages);

  const dispatch = useDispatch();

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
        <ConfirmDelete>All files for this task will be lost</ConfirmDelete>
      )}
    </>
  );
};

export default DeleteTask;
