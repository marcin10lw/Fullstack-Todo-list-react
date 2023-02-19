import { DateInput, Text } from "./styled";
import { Wrapper } from "../../../../common/Wrapper";
import { useDispatch } from "react-redux";
import { addDeadlineDate } from "../../tasksSlice";
import format from "date-fns/format";

const Deadline = ({ task }) => {
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    dispatch(addDeadlineDate({ taskId: task.id, deadlineDate: target.value }));
  };

  const minDate = format(new Date(), "yyyy-MM-dd");
  return (
    <Wrapper>
      <label>
        <Text>Wybierz datę</Text>
        <DateInput
          value={task.deadline.deadlineDate}
          onChange={onInputChange}
          name="date"
          type="date"
          min={minDate}
        />
      </label>
    </Wrapper>
  );
};

export default Deadline;
