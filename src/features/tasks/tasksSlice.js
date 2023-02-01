import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
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
  },
});

export const { addTask, toggleHideDone, completeAll, toggleDone, deleteTask } =
  tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
const selectTasks = (state) => selectTasksState(state).tasks;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;
