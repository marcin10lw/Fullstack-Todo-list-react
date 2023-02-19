import { StyledTaskDate } from "./styled";
import { format } from "date-fns";
import { cs } from "date-fns/locale";

const TaskDate = ({ task }) => {
  const date = Date.parse(task.date);
  const formatedDate = format(date, "eee, dd/MM/yyyy 'o' HH:mm:ss", {
    locale: cs,
  });

  return <StyledTaskDate>Utworzono: {formatedDate}</StyledTaskDate>;
};

export default TaskDate;
