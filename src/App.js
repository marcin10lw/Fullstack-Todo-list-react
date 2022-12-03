import React, {useState} from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";

function App() {
  const [tasks, setTasks] = useState([])
  const [hideDone, setHideDone] = useState(false);

  const hideCompleted = () => {
    if (tasks.some(task => task.done)) {
      setHideDone(hideDone => !hideDone);
    }
  }

  const completeAll = () => {
    setTasks(tasks => tasks.map(task => {
      return {
        ...task,
        done: true,
      }
    }));
  }

  const toggleDone = (id) => {
    setTasks(tasks => tasks.map(task => task.id === id ? {...task, done: !task.done} : task));
  }

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  const addNewTask = (newTask) => {
    setTasks(tasks => {
        return [
          ...tasks,
          {
            content: newTask,
            done: false,
            id: tasks.length === 0 ? 1 : tasks.length + 1,
          },
        ]
      }); 
  }
  
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
