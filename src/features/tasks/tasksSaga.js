import { call, put, takeEvery } from "redux-saga/effects";
import {
  setStatus,
  addTask,
  toggleDone,
  deleteTask,
  updateTask,
} from "./tasksSlice";
import {
  addFirebaseTask,
  deleteFirebaseTask,
  toggleFirebaseTaskDone,
  updateFirebaseDoc,
} from "./tasksFirebaseFunctions";

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

function* updateTaskWorker({ payload }) {
  const { id, updatedProp } = yield payload;
  yield put(setStatus("loading"));
  try {
    yield call(updateFirebaseDoc, id, updatedProp);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
    console.error(error);
  }
}

export function* tasksSaga() {
  yield takeEvery(addTask.type, addTaskWorker);
  yield takeEvery(toggleDone.type, toggleDoneWorker);
  yield takeEvery(deleteTask.type, deleteTaskWorker);
  yield takeEvery(updateTask.type, updateTaskWorker);
}
