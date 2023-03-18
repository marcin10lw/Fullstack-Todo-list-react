import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import {
  fetchExampleTasks,
  selectIsThereAnyTask,
  selectStatus,
} from "../../tasksSlice";

const DownloadButton = () => {
  const isThereAnyTask = useSelector(selectIsThereAnyTask);

  const status = useSelector(selectStatus);
  const disapatch = useDispatch();

  const buttonDisabled =
    status === "pending" || status === "error" || isThereAnyTask;

  let buttonText = "";
  if (status === "success") {
    buttonText = "Get example tasks";
  } else if (status === "pending") {
    buttonText = "Loading...";
  } else {
    buttonText = "Operation failed. Refresh and try again 🙂";
  }

  return (
    <Button
      disabled={buttonDisabled}
      error={status === "error"}
      onClick={() => disapatch(fetchExampleTasks())}
    >
      {buttonText}
    </Button>
  );
};

export default DownloadButton;
