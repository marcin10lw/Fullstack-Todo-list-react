import { StyledButtons, Button } from "./styled";

const Buttons = ({hideDone, tasks, hideCompleted, completeAll}) => {
return tasks.length > 0 && (
    <StyledButtons>
        <Button onClick={() => hideCompleted()}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>

        <Button
            onClick={() => completeAll()}
            disabled={tasks.every(({ done }) => done)}
        >
            Ukończ wszystkie
        </Button>
    </StyledButtons>
    )
}

export default Buttons;