import { combineReducers } from "redux";
import { TODOS_REDUCER } from "./todosReducer";

export const rootReducer = combineReducers({
  todosData: TODOS_REDUCER,
});
