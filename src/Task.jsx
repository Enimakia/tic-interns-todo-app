import React, { useRef } from "react";

function Task({
  name,
  done,
  id,
  activeTasks,
  updateTask,
  deleteTask,
  editTask,
  editTaskId,
}) {
  const taskRef = useRef(null);

  function handleBlur() {
    const newName = taskRef.current.textContent.trim();
    if (newName !== name) {
      editTask(id);
    }
  }

  return (
    <li className={`task ${done ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => updateTask(id)}
        name=""
        id=""
      />
      {editTaskId === id ? (
        <p
          ref={taskRef}
          contentEditable
          onBlur={handleBlur}
          suppressContentEditableWarning
        >
          {name}
        </p>
      ) : (
        <p style={{ textDecoration: done ? "line-through" : "none" }}>{name}</p>
      )}
      {activeTasks.length > 1 && (
        <button onClick={() => deleteTask(id)}>Delete</button>
      )}
      {!done && (
        <button onClick={() => editTask(id)}>
          {editTaskId === id ? "Cancel" : "Edit"}
        </button>
      )}
    </li>
  );
}

export default Task;