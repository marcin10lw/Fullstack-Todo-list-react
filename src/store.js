import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import authReducer from "./features/auth/authSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
