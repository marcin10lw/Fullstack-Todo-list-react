import formatDistanceStrict from "date-fns/formatDistanceStrict";
import pl from "date-fns/locale/pl";
import { StyledTimeLeft } from "./styled";

const TimeLeft = ({ task }) => {
  const deadline = task.deadline ? task.deadline : new Date();

  const timeLeft = formatDistanceStrict(
    Date.parse(task.date),
    Date.parse(deadline),
    {
      locale: pl,
      includeSeconds: true,
      unit: "second",
    }
  );

  return (
    task.deadline && <StyledTimeLeft>Pozostało: {timeLeft}</StyledTimeLeft>
  );
};

export default TimeLeft;
