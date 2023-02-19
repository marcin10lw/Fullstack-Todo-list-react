import { DateAndTime } from "./styled";
import { useState } from "react";
import { Wrapper } from "../../../../common/Wrapper";

const Deadline = ({ task }) => {
  const [startDate, setStartDate] = useState("");

  const onInputChange = ({ target }) => {
    setStartDate(target.value);
  };
  console.log(startDate);
  const minDate = new Date().toISOString().slice(0, -8);
  return (
    <Wrapper>
      <DateAndTime
        value={startDate}
        onChange={onInputChange}
        name="dateAndTime"
        type="datetime-local"
        min={minDate}
      />
    </Wrapper>
  );
};

export default Deadline;
