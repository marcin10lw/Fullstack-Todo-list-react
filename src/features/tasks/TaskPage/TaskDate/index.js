import { StyledTaskDate } from "./styled";
import { format } from "date-fns";
import pl from "date-fns/locale/pl";

const TaskDate = ({ task }) => {
  const date = Date.parse(task.date);
  const formatedDate = format(date, "eee, dd/MM/yyyy 'o' HH:mm:ss", {
    locale: pl,
  });

  return <StyledTaskDate>Utworzono: {formatedDate}</StyledTaskDate>;
};

export default TaskDate;
