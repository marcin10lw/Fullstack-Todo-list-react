import { Wrapper, Button } from "./styled";

const Buttons = ({ hideDone, tasks, hideCompleted, completeAll }) => (
  tasks.length > 0 && (
    <Wrapper>
      <Button onClick={() => hideCompleted()}>
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

export default Buttons;
