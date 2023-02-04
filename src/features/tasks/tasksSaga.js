import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveValueInLocalStorage } from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  selectHideDone,
  selectTasks,
  setExampleTasks,
  setStatus,
} from "./tasksSlice";

function* fetchExampleTasksWorker() {
  try {
    yield put(setStatus("pending"));
    yield delay(1000);
    const tasks = yield call(getExampleTasks);
    yield put(setExampleTasks(tasks));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* saveValueInLocalStorageWorker() {
  const tasks = yield select(selectTasks);
  const hideDone = yield select(selectHideDone);
  yield call(saveValueInLocalStorage, "tasks", tasks);
  yield call(saveValueInLocalStorage, "hideDone", hideDone);
}

export function* tasksSaga() {
  yield takeEvery("*", saveValueInLocalStorageWorker);
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksWorker);
}
