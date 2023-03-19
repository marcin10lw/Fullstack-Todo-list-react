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
    fetchTasks: (state) => {
      state.status = "loading";
    },
    fetchTasksSuccess: (state, { payload: tasks }) => {
      state.status = "success";
      state.tasks = tasks;
    },
    fetchTasksError: (state, { payload: tasks }) => {
      state.status = "error";
    },
    addTask: () => {},
    deleteTask: () => {},
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    completeAll: ({ tasks }) => {
      tasks.forEach((task) => (task.done = true));
    },
    toggleDone: () => {},
    fetchExampleTasks: (state) => {
      state.status = "pending";
    },
    fetchExampleTasksSuccess: (state, { payload: exampleTasks }) => {
      state.tasks = exampleTasks.map((task) => ({ ...task, date: new Date() }));
      state.status = "success";
    },
    fetchExampleTasksError: (state) => {
      state.status = "error";
    },
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
  fetchTasks,
  fetchTasksSuccess,
  fetchTasksError,
  setStatus,
  addTask,
  addNoteContent,
  toggleHideDone,
  completeAll,
  toggleDone,
  deleteTask,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
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
