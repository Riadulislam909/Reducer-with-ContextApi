/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TasksContext, TasksDispatchContext } from "./contexts/TasksContext";
import { getNextId } from "./utils/getNextId";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  const tasks = useContext(TasksContext);
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            text: text,
            id: getNextId(tasks),
          });
          setText("");
        }}
      >
        Add Task
      </button>
    </>
  );
};

export default AddTask;
