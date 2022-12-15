import React, { useState, useEffect } from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";

const useTasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const completeAll = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        return {
          ...task,
          done: true,
        };
      })
    );
  };

  const toggleDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const addNewTask = (newTask) => {
    setTasks((tasks) => {
      return [
        ...tasks,
        {
          content: newTask,
          done: false,
          id: tasks.length === 0 ? 1 : tasks.length + 1,
        },
      ];
    });
  };

  return [tasks, completeAll, toggleDone, deleteTask, addNewTask];
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
