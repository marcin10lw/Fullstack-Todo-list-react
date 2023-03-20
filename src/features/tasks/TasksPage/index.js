import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
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
        optionalContent={<Buttons />}
        content={<TasksList />}
      />
    </Container>
  );
}

export default TasksPage;
