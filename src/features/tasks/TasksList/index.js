import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { Tasks, Task, Content, Button } from "./styled";

const TasksList = ({ id, toggleDone, deleteTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <Tasks>
      {tasks.map((task) => (
        <Task key={id} hiden={task.done && hideDone}>
          <Button done={task.done} onClick={() => toggleDone(task.id)} />

          <Content done={task.done}>{task.content}</Content>

          <Button remove={true} onClick={() => deleteTask(task.id)} />
        </Task>
      ))}
    </Tasks>
  );
};

export default TasksList;
