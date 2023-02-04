import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import DownloadButton from "./DownloadButton";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container/styled";

function TasksPage() {
  return (
    <>
      <Container>
        <Header heading="Lista zadań" />
        <Section
          header="Dodaj nowe zadanie"
          optionalContent={<DownloadButton />}
          content={<Form />}
        />
        <Section
          header="Lista zadań"
          optionalContent={<Buttons />}
          content={<TasksList />}
        />
      </Container>
    </>
  );
}

export default TasksPage;
