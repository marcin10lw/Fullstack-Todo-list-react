import { InfoText } from "../InfoText";

const TimeLeft = ({ task, timeLeft }) => {
  return task.deadline && <InfoText>Pozostało: {timeLeft}</InfoText>;
};

export default TimeLeft;
