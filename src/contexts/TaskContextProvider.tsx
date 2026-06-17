import { useEffect, useReducer } from "react";
import { taskReducer } from "../components/reducers/taskReducer";
import { tasks } from "../data/tasks";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};


export function TaskContextProvider({ children }: TaskContextProviderProps) {
const [state, dispatch] = useReducer(taskReducer, tasks, () => {
  const storageState = localStorage.getItem("taskstate");

  if (!storageState) {
    return tasks;
  }

  const parsedStorageState = JSON.parse(storageState);

  return parsedStorageState;
});

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("taskstate", JSON.stringify(state));
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
