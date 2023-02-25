import { DateInput, Text } from "./styled";
import { Wrapper } from "../../../../common/Wrapper";
import { useDispatch } from "react-redux";
import { addDeadlineDate } from "../../tasksSlice";

const Deadline = ({ task }) => {
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    dispatch(addDeadlineDate({ taskId: task.id, deadlineDate: target.value }));
  };

  return (
    <Wrapper>
      <label>
        <Text>Wybierz termin</Text>
        <DateInput
          value={task.deadline.deadlineDate}
          onChange={onInputChange}
          name="date"
          type="datetime-local"
        />
      </label>
    </Wrapper>
  );
};

export default Deadline;
