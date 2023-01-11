import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { Wrapper, Button } from "./styled";
import { toggleHideDone } from "../tasksSlice";

const Buttons = ({ completeAll }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <Wrapper>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>

        <Button
          onClick={() => completeAll()}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </Wrapper>
    )
  );
};

export default Buttons;
