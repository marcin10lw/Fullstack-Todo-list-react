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
      reducer(state, action) {
        state.tasks.push(action.payload);
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
  },
});

export const { addTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
