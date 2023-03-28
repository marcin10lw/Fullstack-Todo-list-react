import { useDispatch, useSelector } from "react-redux";
import {
  selectHideDone,
  selectStatus,
  selectTaskByQuery,
  setTasks,
} from "../../tasksSlice";
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
import EditContent from "../../EditContent";
import { useEffect } from "react";
import useFirestore from "../../useFirestore";

const TasksList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("szukaj");

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const status = useSelector(selectStatus);
  const { docs } = useFirestore("tasks");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(docs));
  }, [docs]);

  const buttonDisabled = status === "loading";
  return (
    tasks && (
      <Tasks>
        {tasks.map((task) => {
          const deadline = task.deadline;

          return (
            <Task key={task.id} hiden={task.done && hideDone}>
              <Button
                disabled={buttonDisabled}
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

              <EditContent task={task} />

              <Button
                disabled={buttonDisabled}
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
