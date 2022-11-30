import "./style.css";

const TasksList = ({ tasks, hideDone, id }) => (
  <ul className="listOfTasks">
    {tasks.map((task) => (
      <li
        key={id}
        className=
         {`listOfTasks__task ${task.done && hideDone ? "listOfTasks__task--hiden" : ""}`}
      >
        <button
          className={`listOfTasks__listButton ${task.done 
            ? "listOfTasks__toggleButton--done" 
            : "listOfTasks__toggleButton--notDone"}`
          }
        >

        </button>

        <span
            className=
            {`listOfTasks__content ${task.done ? "listOfTasks__content--done" : ""}`}
        >
          {task.content}
        </span>

        <button
            className="listOfTasks__listButton listOfTasks__listButton--delete "
        >
        </button>
      </li>
    ))}
  </ul>
);

export default TasksList;
