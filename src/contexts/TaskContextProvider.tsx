import { useReducer } from "react";
import { taskReducer } from "../components/reducers/taskReducer";
import { tasks } from "../data/tasks";
import { TaskContext } from "./taskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(
    taskReducer,
    tasks,
  );

  return (
    <TaskContext.Provider value={{state, dispatch}}>
      {children}
    </TaskContext.Provider>
  );
}
