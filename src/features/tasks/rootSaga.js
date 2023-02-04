import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./tasksSaga";

export default function* rootSaga() {
  yield all([watchFetchExampleTasks()]);
}
