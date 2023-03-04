import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveValueInLocalStorage } from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  selectHideDone,
  selectTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} from "./tasksSlice";

function* fetchExampleTasksWorker() {
  try {
    yield delay(1000);
    const tasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(tasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
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
