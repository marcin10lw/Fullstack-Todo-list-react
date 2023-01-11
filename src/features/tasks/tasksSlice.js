import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: 1, content: "test 1", done: false },
      { id: 2, content: "test 2", done: true },
    ],
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
  },
});

export const { addTask, toggleHideDone, completeAll } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
