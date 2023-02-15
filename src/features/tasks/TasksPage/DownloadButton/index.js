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
    buttonText = "Pobierz przykładowe zadania";
  } else if (status === "pending") {
    buttonText = "Ładowanie...";
  } else {
    buttonText =
      "Nie udało się pobrać przykładowych zadań. Odśwież i spróbuj ponownie 🙂";
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
