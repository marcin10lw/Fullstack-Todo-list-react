import { TimePassedInfo, TaskNotDoneInfo } from "./styled";
import { InfoText } from "../InfoText";
import { useTimeLeft } from "./useTimeLeft";

const TimeLeft = ({ task }) => {
  const [timeLeft, isPassedDeadline] = useTimeLeft(task);

  return !isPassedDeadline ? (
    <InfoText>Pozostało: {timeLeft}</InfoText>
  ) : (
    <div>
      <TimePassedInfo>Czas minął:</TimePassedInfo>
      <TaskNotDoneInfo>Nie ukończono zadania</TaskNotDoneInfo>
    </div>
  );
};

export default TimeLeft;
