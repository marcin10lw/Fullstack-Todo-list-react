import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import Navbar from "./common/Navbar";
import NotFoundPage from "./common/NotFoundPage";
import LoginPage from "./features/auth/LoginPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" />
        <Route path="/reset" />
        <Route path="/" element={<Navigate to="/zadania" />} />
        <Route path="/zadania" element={<TasksPage />} />
        <Route path="/zadania/:id" element={<TaskPage />} />
        <Route path="/autor" element={<AuthorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
