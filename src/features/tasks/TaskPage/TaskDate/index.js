import { format } from "date-fns";
import { cs } from "date-fns/locale";

const TaskDate = ({ task }) => {
  const date = Date.parse(task.date);
  const formatedDate = format(date, "eee, dd/MM/yyyy 'o' HH:mm:ss", {
    locale: cs,
  });

  return <span>Utworzono w: {formatedDate}</span>;
};

export default TaskDate;
