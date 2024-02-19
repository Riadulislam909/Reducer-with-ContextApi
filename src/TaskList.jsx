/* eslint-disable react/prop-types */

import Task from "./Task";
import { useTasks } from "./contexts/TasksContext";

const TaskList = () => {
  const tasks = useTasks();
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
