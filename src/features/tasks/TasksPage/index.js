import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import DownloadButton from "./DownloadButton";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container/styled";
import SearchTasks from "./SearchTasks";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, selectStatus } from "../tasksSlice";
import Loader from "../../../common/Loader";
import { useEffect } from "react";

function TasksPage() {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      {status === "loading" && <Loader />}
      <Container>
        <Header heading="Todo List" />
        <Section
          header="Add new task"
          optionalContent={<DownloadButton />}
          content={<Form />}
        />
        <Section header="Search" content={<SearchTasks />} />
        <Section
          header="Tasks"
          optionalContent={<Buttons />}
          content={<TasksList />}
        />
      </Container>
    </>
  );
}

export default TasksPage;
