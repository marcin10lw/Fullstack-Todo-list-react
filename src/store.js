import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./features/tasks/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
