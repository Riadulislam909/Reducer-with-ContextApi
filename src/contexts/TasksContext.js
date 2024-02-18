import { createContext } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
// passing null as the default value to both contexts. The actual values will be provided by the TaskApp component.
