import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: {
      reducer({ tasks }, { payload }) {
        tasks.push(payload);
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
    toggleDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);

      tasks[index].done = !tasks[index].done;
    },
    deleteTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);

      tasks.splice(index, 1);
    },
  },
});

export const { addTask, toggleHideDone, completeAll, toggleDone, deleteTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
