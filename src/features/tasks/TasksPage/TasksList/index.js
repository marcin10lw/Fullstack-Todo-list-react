import { useDispatch, useSelector } from "react-redux";
import { selectHideDone, selectTaskByQuery } from "../../tasksSlice";
import { Tasks, Task, Content, Button, StyledLink } from "./styled";
import { toggleDone, deleteTask } from "../../tasksSlice";
import { useSearchParams } from "react-router-dom";

const TasksList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("szukaj");

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <Tasks>
      {tasks.map((task) => (
        <Task key={task.id} hiden={task.done && hideDone}>
          <Button
            done={task.done}
            onClick={() => dispatch(toggleDone(task.id))}
          />

          <Content done={task.done}>
            <StyledLink to={`/${task.id}`}>{task.content}</StyledLink>
          </Content>

          <Button remove={true} onClick={() => dispatch(deleteTask(task.id))} />
        </Task>
      ))}
    </Tasks>
  );
};

export default TasksList;
