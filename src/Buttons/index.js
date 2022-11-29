import "./style.css"

const Buttons = ({hideDone, tasks}) => {
return tasks.length > 0 && (
    <div className="buttons">
        <button className="buttons__button">
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>

        <button 
            className="buttons__button"
            disabled={tasks.every(({ done }) => done)}
        >
            Ukończ wszystkie
        </button>
    </div>
    )
}

export default Buttons;