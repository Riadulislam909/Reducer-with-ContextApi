import { useReducer } from "react";
import AddTask from "./AddTask";
import "./App.css";
import TaskList from "./TaskList";
import { TasksContext, TasksDispatchContext } from "./contexts/TasksContext";
import { initialTasks } from "./data";
import taskReducer from "./reducers/taskReducer";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }
  function handleDelete(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <TasksContext.Provider value={tasks}>
      {/* initializing the provider with value */}
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
