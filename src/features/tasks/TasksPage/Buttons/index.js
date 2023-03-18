import { useDispatch, useSelector } from "react-redux";
import {
  selectHideDone,
  selectIsEveryTaskDone,
  selectIsThereAnyTask,
} from "../../tasksSlice";
import { Wrapper } from "./styled";
import { Button } from "../Button";
import { toggleHideDone, completeAll } from "../../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const isThereAnyTask = useSelector(selectIsThereAnyTask);
  const dispatch = useDispatch();

  return (
    isThereAnyTask && (
      <Wrapper>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Show done" : "Hide done"}
        </Button>

        <Button
          onClick={() => dispatch(completeAll())}
          disabled={isEveryTaskDone}
        >
          Complete all
        </Button>
      </Wrapper>
    )
  );
};

export default Buttons;
