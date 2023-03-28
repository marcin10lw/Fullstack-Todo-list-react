import Form from "./Form";
import TasksList from "./TasksList";
import HideDone from "./HideDone";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container/styled";
import SearchTasks from "./SearchTasks";
import useQuerySnapshot from "../useQuerySnapshot";
import { useDispatch } from "react-redux";
import { setTasks } from "../tasksSlice";
import { useEffect } from "react";

function TasksPage() {
  const data = useQuerySnapshot("tasks");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(data));
  }, [data]);

  return (
    <Container>
      <Header heading="Todo List" />
      <Section header="Add new task" content={<Form />} />
      <Section header="Search" content={<SearchTasks />} />
      <Section
        header="Tasks"
        optionalContent={<HideDone />}
        content={<TasksList />}
      />
    </Container>
  );
}

export default TasksPage;
