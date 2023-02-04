import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";

function App() {
  return (
    <BrowserRouter basename="To-do-list-react">
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/autor" element={<AuthorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
