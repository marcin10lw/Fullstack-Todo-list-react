import { useDispatch, useSelector } from "react-redux";
import { selectHideDone, selectTaskByQuery } from "../../tasksSlice";
import {
  Tasks,
  Task,
  Content,
  Button,
  StyledLink,
  DeadlineDate,
} from "./styled";
import { toggleDone, deleteTask } from "../../tasksSlice";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";

const TasksList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("szukaj");

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    tasks && (
      <Tasks>
        {tasks.map((task) => {
          const deadline = task.deadline.deadlineDate;

          return (
            <Task key={task.id} hiden={task.done && hideDone}>
              <Button
                done={task.done}
                onClick={() =>
                  dispatch(toggleDone({ id: task.id, done: task.done }))
                }
              />

              <Content done={task.done}>
                <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
              </Content>

              {deadline && (
                <DeadlineDate>
                  {format(Date.parse(deadline), "do 'of' MMMM yyyy", {
                    locale: enUS,
                  })}
                </DeadlineDate>
              )}

              <Button
                remove={true}
                onClick={() => dispatch(deleteTask(task.id))}
              />
            </Task>
          );
        })}
      </Tasks>
    )
  );
};

export default TasksList;
