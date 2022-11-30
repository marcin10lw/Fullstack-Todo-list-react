import React, {useState} from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";


let hideDone = false;

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, content: "Posprzątać w domu", done: false},
    {id: 2, content: "Nakarmić koty", done: true},
  ])
  const [hideDone, setHideDone] = useState(false);

  const hideCompleted = () => {
    setHideDone(hideDone => !hideDone);
  }
  
  return (
    <Main>
      <Header />
      <Section 
          header="Dodaj nowe zadanie"
          content={<Form />}
      />
      <Section
          header="Lista zadań"
          optionalContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              hideCompleted={hideCompleted}
            />
          }
          content={<TasksList tasks={tasks} hideDone={hideDone}/>}
      />
    </Main>
  );
}

export default App;
