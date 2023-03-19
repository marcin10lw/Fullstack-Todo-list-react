import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import NotFoundPage from "../common/NotFoundPage";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import ResetPage from "./auth/ResetPage";
import AuthorPage from "./author/AuthorPage";
import TaskPage from "./tasks/TaskPage";
import TasksPage from "./tasks/TasksPage";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  removeActiveUser,
  selectIsLoggedIn,
  setActiveUser,
} from "./auth/authSlice";
import RequireAuth from "../common/RequireAuth";
import { createNameFromEmail } from "./auth/createNameFromEmail";
import { setTasks } from "./tasks/tasksSlice";

function TodoList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
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
        dispatch(setTasks([]));
      }
    });
  }, [dispatch, navigate]);

  useEffect(() => {
    isLoggedIn ? navigate("/tasks") : navigate("/login");
  }, [isLoggedIn]);

  return (
    <>
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

export default TodoList;
