import { combineReducers } from "redux";

import profile from "./reducers/profile";
import token from "./reducers/token";
import user from "./reducers/user";
const rootReducer = combineReducers({
  profile: profile,
  token: token,
  user: user,
});

export default rootReducer;
