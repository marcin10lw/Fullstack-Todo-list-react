import { formatDistanceStrict, setHours } from "date-fns";
import { pl } from "date-fns/locale";
import { useEffect, useState } from "react";

const useTimeLeft = (task) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const deadlineDate = task.deadline.deadlineDate
    ? task.deadline.deadlineDate
    : new Date();
  const formattedDeadline = setHours(new Date(deadlineDate), 24);

  useEffect(() => {
    const dateIntervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(dateIntervalId);
  }, [currentDate]);

  const formattedTimeLeft = formatDistanceStrict(
    Date.parse(currentDate),
    Date.parse(formattedDeadline),
    {
      locale: pl,
      includeSeconds: true,
    }
  );

  return [formattedTimeLeft];
};

export { useTimeLeft };
