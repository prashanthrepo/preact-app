import { ActionTypes } from "./actionTypes";

export const TODOS_DATA_ACTION = (data) => {
  return {
    type: ActionTypes.TODOS_DATA_ACTION_TYPE,
    payload: data,
  };
};
