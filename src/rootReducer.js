import { combineReducers } from "redux";

import profile from "./reducers/profile";
import token from "./reducers/token";
const rootReducer = combineReducers({
  profile: profile,
  token: token,
});

export default rootReducer;
