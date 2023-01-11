import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { Tasks, Task, Content, Button } from "./styled";
import { toggleDone } from "../tasksSlice";

const TasksList = ({ deleteTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Tasks>
      {tasks.map((task) => (
        <Task key={task.id} hiden={task.done && hideDone}>
          <Button
            done={task.done}
            onClick={() => dispatch(toggleDone(task.id))}
          />

          <Content done={task.done}>{task.content}</Content>

          <Button remove={true} onClick={() => deleteTask(task.id)} />
        </Task>
      ))}
    </Tasks>
  );
};

export default TasksList;
