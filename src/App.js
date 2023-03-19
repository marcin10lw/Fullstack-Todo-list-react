import TodoList from "./features/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
