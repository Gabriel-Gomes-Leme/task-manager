import { type taskModel } from "../../models/taskModel";
import { TaskActionTypes } from "./taskAction";
import type { TaskActionModels } from "./taskAction";

export function taskReducer(
    state: taskModel[],
    action: TaskActionModels
): taskModel[] {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return [...state, action.payload];
    case TaskActionTypes.UPDATE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case TaskActionTypes.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}