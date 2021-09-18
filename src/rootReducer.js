import { combineReducers } from "redux";

import profile from "./reducers/profile";

const rootReducer = combineReducers({
  profile: profile,
});

export default rootReducer;
