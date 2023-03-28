import Form from "./Form";
import TasksList from "./TasksList";
import HideDone from "./HideDone";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container/styled";
import SearchTasks from "./SearchTasks";

function TasksPage() {
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
