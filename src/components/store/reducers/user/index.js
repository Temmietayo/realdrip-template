import { combineReducers } from "redux";

import wardReducer from "./wardReducer";

export default combineReducers({
  wardAdmin: wardReducer
});
