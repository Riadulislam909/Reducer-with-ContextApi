/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { initialTasks } from "../data.js";
import taskReducer from "../reducers/taskReducer.js";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
// passing null as the default value to both contexts. The actual values will be provided by the TaskApp component.

export default function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTaskDispatch() {
  return useContext(TasksDispatchContext);
}
