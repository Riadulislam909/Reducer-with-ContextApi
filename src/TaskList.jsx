/* eslint-disable react/prop-types */

import { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "./contexts/TasksContext";

const TaskList = () => {
  const tasks = useContext(TasksContext);
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
