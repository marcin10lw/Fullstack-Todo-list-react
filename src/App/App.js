import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useTasks } from "../useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";

const theme = {
  breakpoints: {
    mobile: 767,
  },
};

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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
