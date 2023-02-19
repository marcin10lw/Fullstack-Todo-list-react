import { DateAndTime } from "./styled";
import { Wrapper } from "../../../../common/Wrapper";
import { useDispatch } from "react-redux";
import { addDeadlineDate } from "../../tasksSlice";

const Deadline = ({ task }) => {
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    dispatch(addDeadlineDate({ taskId: task.id, deadlineDate: target.value }));
  };

  const minDate = new Date().toISOString().slice(0, -8);
  return (
    <Wrapper>
      <DateAndTime
        value={task.deadline}
        onChange={onInputChange}
        name="dateAndTime"
        type="datetime-local"
        min={minDate}
      />
    </Wrapper>
  );
};

export default Deadline;
