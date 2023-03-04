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
            noteContent: "",
            done: false,
            date: new Date(),
            deadline: {
              deadlineDate: "",
            },
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
      const index = tasks.findIndex((task) => task.id == id);
      tasks[index].content = newContent;
    },
  },
});

export const {
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
