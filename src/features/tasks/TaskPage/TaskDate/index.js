import { format } from "date-fns";
import pl from "date-fns/locale/pl";
import { InfoText } from "../InfoText";

const TaskDate = ({ task }) => {
  const date = Date.parse(task.date);
  const formatedDate = format(date, "eee dd/MM/yyyy 'o' HH:mm:ss", {
    locale: pl,
  });

  return <InfoText>Utworzono: {formatedDate}</InfoText>;
};

export default TaskDate;
