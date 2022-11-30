import "./style.css"

const Buttons = ({hideDone, tasks, hideCompleted, completeAll}) => {
return tasks.length > 0 && (
    <div className="buttons">
        <button className="buttons__button" onClick={() => hideCompleted()}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>

        <button 
            className="buttons__button"
            onClick={() => completeAll()}
            disabled={tasks.every(({ done }) => done)}
        >
            Ukończ wszystkie
        </button>
    </div>
    )
}

export default Buttons;