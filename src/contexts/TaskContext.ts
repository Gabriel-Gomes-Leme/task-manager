import { createContext } from "react"
import type { TaskActionModels } from "../components/reducers/taskAction"
import { tasks } from "../data/tasks"
import type { taskModel } from "../models/taskModel"

export type TaskState = taskModel[];

type taskContextProps ={
  state: TaskState,
  dispatch: React.Dispatch<TaskActionModels>
}

const initialContextValue : taskContextProps ={
    state: tasks,
    dispatch: () => {}
}

export const TaskContext = createContext(initialContextValue)