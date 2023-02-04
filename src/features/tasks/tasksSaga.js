import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setExampleTasks, setStatus } from "./tasksSlice";

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

export function* watchFetchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksWorker);
}
