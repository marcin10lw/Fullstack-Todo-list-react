import { formatDistanceStrict, isBefore, setHours } from "date-fns";
import { pl } from "date-fns/locale";
import { useEffect, useState } from "react";

const useTimeLeft = (task) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const deadlineDate = task.deadline.deadlineDate
    ? task.deadline.deadlineDate
    : new Date();
  const formattedDeadline = setHours(new Date(deadlineDate), 24);
  // const formattedDeadline = new Date(2023, 1, 20, 20, 44, 50);

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

  const isPassedDeadline = isBefore(Date.parse(formattedDeadline), new Date());

  return [formattedTimeLeft, isPassedDeadline];
};

export { useTimeLeft };
