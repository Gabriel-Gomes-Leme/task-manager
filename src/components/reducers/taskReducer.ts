import { type taskModel } from "../../models/taskModel";
import type { TaskActionModels } from "./taskAction";

export function taskReducer(
    state: taskModel[],
    action: TaskActionModels
): taskModel[] {
    console.log(action.type);
  switch (action.type) {
    case "ADD_TASK":
    return [...state, action.payload];
  }

  return state;
}