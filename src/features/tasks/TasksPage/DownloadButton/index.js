import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { fetchExampleTasks, selectStatus } from "../../tasksSlice";

const DownloadButton = () => {
  const status = useSelector(selectStatus);
  const disapatch = useDispatch();

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
      disabled={status === "pending" || status === "error"}
      error={status === "error"}
      onClick={() => disapatch(fetchExampleTasks())}
    >
      {buttonText}
    </Button>
  );
};

export default DownloadButton;
