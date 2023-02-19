import { setHours } from "date-fns";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import pl from "date-fns/locale/pl";
import { useEffect, useState } from "react";
import { StyledTimeLeft } from "./styled";

const TimeLeft = ({ task }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const deadline = task.deadline ? task.deadline : new Date();
  const formattedDeadline = setHours(new Date(deadline), 24);

  const timeLeft = formatDistanceStrict(
    Date.parse(currentDate),
    Date.parse(formattedDeadline),
    {
      locale: pl,
      includeSeconds: true,
    }
  );

  useEffect(() => {
    const dateIntervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(dateIntervalId);
  }, [currentDate]);

  return (
    task.deadline && <StyledTimeLeft>Pozostało: {timeLeft}</StyledTimeLeft>
  );
};

export default TimeLeft;
