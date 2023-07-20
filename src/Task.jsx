import React, { useState } from "react";

function Task({ name, done, updateTask, idx }) {
  const [editMode, setEditMode] = useState(false);

  const deleteTask = () => {
    updateTask(idx);
  };

  const editTask = () => {
    setEditMode(true);
  };

  const markTaskAsDone = () => {
    updateTask(idx);
  };

  return (
    <li className="task">
      <input
        type="checkbox"
        checked={done}
        onChange={function () { markTaskAsDone(idx) }}
        name=""
        id=""
      />
      <p> {name} </p>
      {editMode ? (
        <input
          type="text"
          placeholder="Edit task"
          onChange={function (event) {
            setTaskName(event.target.value);
          }}
          value={taskName}
        />
      ) : (
        <button onClick={editTask}>Edit</button>
      )}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default Task;