import { useReducer } from "react";
import AddTask from "./AddTask";
import "./App.css";
import TaskList from "./TaskList";
import { TasksContext, TasksDispatchContext } from "./contexts/TasksContext";
import { initialTasks } from "./data";
import taskReducer from "./reducers/taskReducer";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce(
      (prev, curv) => (prev && prev.id > curv.id ? prev.id : curv.id),
      0
    );
    return maxId + 1;
  };

  function handleAddTask(text) {
    dispatch({
      type: "added",
      text: text,
      id: getNextId(tasks),
    });
  }
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
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Task Manager</h1>
        <AddTask onAdd={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDelete={handleDelete}
        />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
