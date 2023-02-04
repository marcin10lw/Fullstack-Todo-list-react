import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getValueFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getValueFromLocalStorage("tasks", []),
    status: "success",
    hideDone: getValueFromLocalStorage("hideDone", false),
  },
  reducers: {
    addTask: {
      reducer({ tasks }, { payload: task }) {
        tasks.push(task);
      },
      prepare(content) {
        return {
          payload: {
            id: nanoid(),
            content,
            done: false,
          },
        };
      },
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    completeAll: ({ tasks }) => {
      tasks.forEach((task) => (task.done = true));
    },
    toggleDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex((task) => task.id === taskId);

      tasks[index].done = !tasks[index].done;
    },
    deleteTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex((task) => task.id === taskId);

      tasks.splice(index, 1);
    },
    fetchExampleTasks: () => {},
    setExampleTasks: (state, { payload: exampleTasks }) => {
      state.tasks = exampleTasks;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  completeAll,
  toggleDone,
  deleteTask,
  fetchExampleTasks,
  setExampleTasks,
  setStatus,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;

export const selectHideDone = (state) => selectTasksState(state).hideDone;

export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const selectIsThereAnyTask = (state) => selectTasks(state).length > 0;

export const selectStatus = (state) => selectTasksState(state).status;

export const selectTaskById = (state, id) =>
  selectTasks(state).find((task) => task.id === id);

export const selectTaskByQuery = (state, query) => {
  const tasks = selectTasks(state);
  if (!query || query === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.toUpperCase())
  );
};

export default tasksSlice.reducer;
