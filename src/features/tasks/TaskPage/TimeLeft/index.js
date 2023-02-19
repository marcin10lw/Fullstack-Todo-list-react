import { useTimeLeft } from "./useFormattedTimeLeft";
import { StyledTimeLeft } from "./styled";

const TimeLeft = ({ task }) => {
  const [formattedTimeLeft] = useTimeLeft(task);

  return (
    task.deadline && (
      <StyledTimeLeft>Pozostało: {formattedTimeLeft}</StyledTimeLeft>
    )
  );
};

export default TimeLeft;
