import { Status, type taskModel } from "../../models/taskModel";
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

    case TaskActionTypes.CHANGE_STATUS:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              status:
                task.status === Status.CONCLUIDA
                  ? Status.PENDENTE
                  : Status.CONCLUIDA,
            }
          : task
      );
    default:
      return state;
  }
}