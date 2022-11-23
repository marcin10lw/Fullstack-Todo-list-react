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
let hideDoneTasks = false;

function App() {
  return (
    <Main>
      <Header />
      <Section 
          sectionHeader="Dodaj nowe zadanie"
          sectionContent={<Form />}
        />
      <Section
          sectionHeader="Lista zadań"
          sectionOptionalContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
          sectionContent={<TasksList tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
        />
    </Main>
  );
}

export default App;
