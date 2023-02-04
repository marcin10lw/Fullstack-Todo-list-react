import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import NotFoundPage from "./common/NotFoundPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";

function App() {
  return (
    <BrowserRouter basename="To-do-list-react">
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/zadania" element={<TasksPage />} />
        <Route path="/zadania/:id" element={<TaskPage />} />
        <Route path="/autor" element={<AuthorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
