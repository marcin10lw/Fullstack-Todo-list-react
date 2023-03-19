import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveValueInLocalStorage } from "./valuesLocalStorage";
import {
  fetchExampleTasks,
  selectHideDone,
  selectTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  setStatus,
  fetchTasks,
  fetchTasksError,
  fetchTasksSuccess,
  addTask,
  toggleDone,
  deleteTask,
} from "./tasksSlice";
import {
  addFirebaseTask,
  deleteFirebaseTask,
  getFirebaseTasks,
  toggleFirebaseTaskDone,
} from "./tasksFirebaseFunctions";

function* fetchExampleTasksWorker() {
  try {
    yield delay(1000);
    const tasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(tasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
  }
}

function* toggleDoneWorker({ payload }) {
  yield put(setStatus("loading"));

  const { id, done } = yield payload;
  try {
    yield call(toggleFirebaseTaskDone, id, done);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* addTaskWorker({ payload: content }) {
  yield put(setStatus("loading"));
  try {
    yield call(addFirebaseTask, content);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
    console.error(error);
  }
}

function* deleteTaskWorker({ payload: id }) {
  yield put(setStatus("loading"));
  try {
    yield call(deleteFirebaseTask, id);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
    console.error(error);
  }
}

function* fetchTasksWorker() {
  try {
    const tasks = yield call(getFirebaseTasks);
    yield put(fetchTasksSuccess(tasks));
  } catch (error) {
    yield put(fetchTasksError());
  }
}

// function* saveValueInLocalStorageWorker() {
//   const tasks = yield select(selectTasks);
//   const hideDone = yield select(selectHideDone);
//   yield call(saveValueInLocalStorage, "tasks", tasks);
//   yield call(saveValueInLocalStorage, "hideDone", hideDone);
// }

export function* tasksSaga() {
  // yield takeEvery("*", saveValueInLocalStorageWorker);
  yield takeLatest(fetchTasks.type, fetchTasksWorker);
  yield takeEvery(addTask.type, addTaskWorker);
  yield takeEvery(toggleDone.type, toggleDoneWorker);
  yield takeEvery(deleteTask.type, deleteTaskWorker);
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksWorker);
}
