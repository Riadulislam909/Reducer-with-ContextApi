/* eslint-disable react/prop-types */
import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add Task
      </button>
    </>
  );
};

export default AddTask;
