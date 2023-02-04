import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./common/Navbar";
import NotFoundPage from "./common/NotFoundPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/:id" element={<TaskPage />} />
        <Route path="/autor" element={<AuthorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
