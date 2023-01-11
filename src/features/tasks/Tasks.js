import { useTasks } from "../../useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container/styled";
import { useLocalStorageState } from "../../useLocalStorageState";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const [completeAll, toggleDone, deleteTask, addNewTask] = useTasks();

  const { tasks } = useSelector(selectTasks);
  const [hideDone, setHideDone] = useLocalStorageState("hideDone", false);

  const hideCompleted = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <>
      <Container>
        <Header />
        <Section header="Dodaj nowe zadanie" content={<Form />} />
        <Section
          header="Lista zadań"
          optionalContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              hideCompleted={hideCompleted}
              completeAll={completeAll}
            />
          }
          content={
            <TasksList
              tasks={tasks}
              hideDone={hideDone}
              toggleDone={toggleDone}
              deleteTask={deleteTask}
            />
          }
        />
      </Container>
    </>
  );
}

export default Tasks;
