import AddTask from "./AddTask";
import "./App.css";
import TaskList from "./TaskList";
import TaskContextProvider from "./contexts/TasksContext";

function App() {
  return (
    <TaskContextProvider>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </TaskContextProvider>
  );
}

export default App;
