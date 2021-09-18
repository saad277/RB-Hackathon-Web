import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";

export default () => {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
};
