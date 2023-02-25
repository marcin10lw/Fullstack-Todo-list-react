import { TimePassedInfo, TaskNotDoneInfo, TaskDoneInfo } from "./styled";
import { InfoText } from "../InfoText";
import { useTimeLeft } from "./useTimeLeft";

const TimeLeft = ({ task }) => {
  const [timeLeft, isPassedDeadline] = useTimeLeft(task);

  return !isPassedDeadline ? (
    <InfoText>Pozostało: {timeLeft}</InfoText>
  ) : (
    <div>
      <TimePassedInfo>Minął termin na ukończenie zadania:</TimePassedInfo>
      {task.done ? (
        <TaskDoneInfo>Ukończono</TaskDoneInfo>
      ) : (
        <TaskNotDoneInfo>Nie ukończono</TaskNotDoneInfo>
      )}
    </div>
  );
};

export default TimeLeft;
