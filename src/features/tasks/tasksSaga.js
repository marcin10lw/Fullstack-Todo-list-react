import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveValueInLocalStorage } from "./valuesLocalStorage";
import {
  fetchExampleTasks,
  selectHideDone,
  selectTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  addTask,
  setIsLoadingTasks,
} from "./tasksSlice";
import { addTaskToFirebase } from "./tasksFirestoreFunctions";

function* fetchExampleTasksWorker() {
  try {
    yield delay(1000);
    const tasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(tasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
  }
}

function* addTaskWorker({ payload: content }) {
  yield put(setIsLoadingTasks(true));
  try {
    yield call(addTaskToFirebase, content);
    yield put(setIsLoadingTasks(false));
  } catch (error) {
    yield put(setIsLoadingTasks(false));
    console.error(error);
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
  yield takeEvery(addTask.type, addTaskWorker);
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksWorker);
}
