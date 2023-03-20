import TodoList from "./features/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { removeActiveUser, setActiveUser } from "./features/auth/authSlice";
import { createNameFromEmail } from "./features/auth/createNameFromEmail";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "./config/firebase";
import { setTasks } from "./features/tasks/tasksSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

        navigate("/tasks");
      } else {
        dispatch(removeActiveUser());
        dispatch(setTasks([]));
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <ToastContainer
        autoClose={2500}
        limit={3}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      <TodoList />
    </>
  );
};

export default App;
