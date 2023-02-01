import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container/styled";
import DownloadButton from "./DownloadButton";

function Tasks() {
  return (
    <>
      <Container>
        <Header />
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

export default Tasks;
