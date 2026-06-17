import type { taskModel } from "../../models/taskModel"

export const TaskActionTypes = {
    ADD_TASK: 'ADD_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK'
} as const;

export type TaskActionModels =
    | {
        type: typeof TaskActionTypes.ADD_TASK,
        payload: taskModel
    }
    | {
        type: typeof TaskActionTypes.UPDATE_TASK,
        payload: taskModel
    }
    | {
        type: typeof TaskActionTypes.DELETE_TASK,
        payload: number
    }