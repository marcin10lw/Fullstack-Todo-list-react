import { createSlice } from "@reduxjs/toolkit";
import { getValueFromLocalStorage } from "./valuesLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "success",
    isLoadingTasks: false,
    hideDone: getValueFromLocalStorage("hideDone", false),
  },
  reducers: {
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    addTask: () => {},
    deleteTask: () => {},
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleDone: () => {},
    addNoteContent: ({ tasks }, action) => {
      const { taskId, noteValue } = action.payload;
      const index = tasks.findIndex((task) => task.id === taskId);

      tasks[index].noteContent = noteValue;
    },
    addDeadlineDate: ({ tasks }, action) => {
      const { taskId, deadlineDate } = action.payload;
      const index = tasks.findIndex((task) => task.id === taskId);

      tasks[index].deadline.deadlineDate = deadlineDate;
    },
    editTaskContent: ({ tasks }, { payload }) => {
      const { id, newContent } = payload;
      const index = tasks.findIndex((task) => task.id === id);
      tasks[index].content = newContent;
    },
  },
});

export const {
  setTasks,
  setStatus,
  addTask,
  addNoteContent,
  toggleHideDone,
  toggleDone,
  deleteTask,
  addDeadlineDate,
  editTaskContent,
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

  const taskDateSorted = tasks
    .slice()
    .sort((a, b) =>
      b.deadline.deadlineDate.localeCompare(a.deadline.deadlineDate)
    );

  if (!query || query === "") {
    let newTasks = [];

    taskDateSorted.forEach((task) => {
      if (task.deadline.deadlineDate !== "") {
        newTasks.unshift(task);
      } else {
        newTasks.push(task);
      }
    });

    return newTasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.toUpperCase())
  );
};

export default tasksSlice.reducer;
