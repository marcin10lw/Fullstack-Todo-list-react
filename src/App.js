import React, { useState, useEffect } from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";
import { useTasks } from "./useTasks";

function App() {
  const [tasks, completeAll, toggleDone, deleteTask, addNewTask] = useTasks();

  const [hideDone, setHideDone] = useState(
    JSON.parse(localStorage.getItem("hideDone")) || false
  );

  useEffect(() => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  }, [hideDone]);

  const hideCompleted = () => {
    if (tasks.some((task) => task.done)) {
      setHideDone((hideDone) => !hideDone);
    }
  };

  return (
    <Main>
      <Header />
      <Section
        header="Dodaj nowe zadanie"
        content={<Form addNewTask={addNewTask} />}
      />
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
    </Main>
  );
}

export default App;
