import { ActionTypes } from "../actionTypes";
const initialState = {
  todos: [],
};
export const TODOS_REDUCER = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.TODOS_DATA_ACTION_TYPE:
      return { ...state, todos: payload };

    default:
      return state;
  }
};
