/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { TasksDispatchContext } from "./contexts/TasksContext";

const Task = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  let textContent;
  if (isEdit) {
    textContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    );
  } else {
    textContent = (
      <>
        {task.text}
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) =>
              dispatch({
                type: "changed",
                task: { ...task, done: e.target.checked },
              })
            }
          />
          {textContent}
          <button onClick={() => dispatch({ type: "deleted", id: task.id })}>
            Delete
          </button>
        </label>
      </li>
    </>
  );
};

export default Task;
