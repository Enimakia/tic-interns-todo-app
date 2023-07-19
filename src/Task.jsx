import React from "react";

function Task({ name, done, updateTask, idx }) {
  return (
    <li className="task">
      <input
        type="checkbox"
        checked={done}
        onChange={function () { updateTask(idx) }}
        name=""
        id=""
      />
      <p> {name} </p>
    </li>
  );
}

export default Task;
