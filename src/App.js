import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";

let tasks = [
  {id: 1, content: "Posprzątać w domu", done: false},
  {id: 2, content: "Nakarmić koty", done: true},
]
let hideDone = false;

function App() {
  return (
    <Main>
      <Header />
      <Section 
          header="Dodaj nowe zadanie"
          content={<Form />}
      />
      <Section
          header="Lista zadań"
          optionalContent={<Buttons tasks={tasks} hideDone={hideDone}/>}
          content={<TasksList tasks={tasks} hideDone={hideDone}/>}
      />
    </Main>
  );
}

export default App;
