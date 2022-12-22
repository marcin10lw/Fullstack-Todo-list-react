import { useLocalStorageState } from "./useLocalStorageState";

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorageState("tasks", []);

  const completeAll = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({...task, done: true}))
    );
  };

  const toggleDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const addNewTask = (newTask) => {
    setTasks((tasks) => {
      return [
        ...tasks,
        {
          content: newTask,
          done: false,
          id: tasks.length === 0 ? 1 : tasks.length + 1,
        },
      ];
    });
  };

  return [tasks, completeAll, toggleDone, deleteTask, addNewTask];
};