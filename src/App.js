import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./common/Navbar";
import NotFoundPage from "./common/NotFoundPage";
import AuthorPage from "./features/author/AuthorPage";
import HomePage from "./features/home/HomePage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zadania" element={<TasksPage />} />
        <Route path="/zadania/:id" element={<TaskPage />} />
        <Route path="/autor" element={<AuthorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
