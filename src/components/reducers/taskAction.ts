import type { taskModel } from "../../models/taskModel"

export enum TaskActionTypes {
    ADD_TASK = 'ADD_TASK',
    UPDATE_TASK = 'UPDATE_TASK',
    DELETE_TASK = 'DELETE_TASK'
}

export type TaskActionModels = |{
        type: TaskActionTypes.ADD_TASK,
        payload: taskModel
    }
    | {
        type: TaskActionTypes.UPDATE_TASK,
        payload: {card: taskModel}
    }
    | {
        type: TaskActionTypes.DELETE_TASK,
        payload: number
    }