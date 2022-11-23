import "./style.css"

const Buttons = ({hideDoneTasks, tasks}) => {
return tasks.length > 0 && (
    <div className="buttonsContainer">
        <button className="buttonsContainer__button">
            {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>

        <button 
            className="buttonsContainer__button"
            disabled={tasks.every(({ done }) => done)}
        >
            Ukończ wszystkie
        </button>
    </div>
    )
}

export default Buttons;