import { useDispatch, useSelector } from "react-redux";
import { selectIsEveryTaskDone, selectTasksState } from "../tasksSlice";
import { Wrapper, Button } from "./styled";
import { toggleHideDone, completeAll } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <Wrapper>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>

        <Button
          onClick={() => dispatch(completeAll())}
          disabled={isEveryTaskDone}
        >
          Ukończ wszystkie
        </Button>
      </Wrapper>
    )
  );
};

export default Buttons;
