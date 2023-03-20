import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import NotFoundPage from "../common/NotFoundPage";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import ResetPage from "./auth/ResetPage";
import AuthorPage from "./author/AuthorPage";
import TaskPage from "./tasks/TaskPage";
import TasksPage from "./tasks/TasksPage";
import RequireAuth from "../common/RequireAuth";
import { useDispatch } from "react-redux";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { setStatus, setTasks } from "./tasks/tasksSlice";
import { auth, db } from "../config/firebase";
import { useEffect } from "react";

function TodoList() {
  const dispatch = useDispatch();

  const tasksRef = collection(db, "tasks");

  useEffect(() => {
    dispatch(setStatus("loading"));

    const queryTasks = query(
      tasksRef,
      where("userId", "==", auth.currentUser.uid)
    );
    const unsub = onSnapshot(queryTasks, (snapshot) => {
      let tasks = [];

      snapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), id: doc.id });
      });
      dispatch(setTasks(tasks));
      dispatch(setStatus("success"));
    });

    return () => unsub();
  }, [dispatch, tasksRef]);

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
