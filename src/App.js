import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./common/Navbar";
import NotFoundPage from "./common/NotFoundPage";
import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./features/auth/RegisterPage";
import ResetPage from "./features/auth/ResetPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useDispatch } from "react-redux";
import { removeActiveUser, setActiveUser } from "./features/auth/authSlice";
import RequireAuth from "./common/RequireAuth";
import Loader from "./common/Loader";
import { createNameFromEmail } from "./features/auth/createNameFromEmail";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/tasks");

        dispatch(
          setActiveUser({
            email: user.email,
            userName: user.displayName
              ? user.displayName
              : createNameFromEmail(user.email),
            userId: user.uid,
          })
        );
      } else {
        dispatch(removeActiveUser());
      }
    });
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        autoClose={2500}
        limit={3}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route
          path="/tasks"
          element={
            <RequireAuth>
              <TasksPage />
            </RequireAuth>
          }
        />
        <Route
          path="/tasks/:id"
          element={
            <RequireAuth>
              <TaskPage />
            </RequireAuth>
          }
        />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
