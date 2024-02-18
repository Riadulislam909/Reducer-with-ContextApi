/* eslint-disable react/prop-types */

import { useState } from "react";

const Task = ({ task, onChangeTask, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  let textContent;
  if (isEdit) {
    textContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
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
              onChangeTask({
                ...task,
                done: e.target.checked,
              })
            }
          />
          {textContent}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
      </li>
    </>
  );
};

export default Task;
