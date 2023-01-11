import { useTasks } from "../../useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container/styled";

function Tasks() {
  const [deleteTask] = useTasks();

  return (
    <>
      <Container>
        <Header />
        <Section header="Dodaj nowe zadanie" content={<Form />} />
        <Section
          header="Lista zadań"
          optionalContent={<Buttons />}
          content={<TasksList deleteTask={deleteTask} />}
        />
      </Container>
    </>
  );
}

export default Tasks;
