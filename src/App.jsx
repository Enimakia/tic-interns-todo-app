import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./Task";

function App() {
  const [taskName, setTaskName] = useState("");
  const [editTaskName, setEditTaskName] = useState("");
  const [editTaskId, setEditTaskId] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy a new chair", done: false },
    { id: 2, name: "Renew internet subscription", done: false },
    { id: 3, name: "Purchase groceries", done: true },
    { id: 4, name: "Finish this todo application", done: false },
  ]);
  const [activeTasks, setActiveTasks] = useState(
    tasks.filter((task) => !task.done)
  );

  function updateTask(taskId) {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
    setActiveTasks(newTasks.filter((task) => !task.done));
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    setActiveTasks(newTasks.filter((task) => !task.done));
  }

  function editTask(taskId) {
    const task = tasks.find((task) => task.id === taskId);
    setEditTaskName(task.name);
    setEditTaskId(taskId);
    
  }

  function cancelEdit() {
    setEditTaskName("");
    setEditTaskId("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (editTaskId) {
      const newTasks = tasks.map((task) =>
        task.id === editTaskId ? { ...task, name: editTaskName } : task
      );
      setTasks(newTasks);
      setActiveTasks(newTasks.filter((task) => !task.done));
      setEditTaskName("");
      setEditTaskId("");
    } else {
      const newTask = { id: Date.now(), name: taskName, done: false };
      setTasks([...tasks, newTask]);
      setActiveTasks([...activeTasks, newTask]);
      setTaskName("");
    }
  }

  return (
    <>
      <h1>My Todo app</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          onChange={(event) =>
            editTaskId ? setEditTaskName(event.target.value) : setTaskName(event.target.value)
          }
        />
        <button type="submit">{editTaskId ? "Update" : "Create"}</button>
        {editTaskId && <button onClick={cancelEdit}>Cancel</button>}
      </form>

      <div>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              name={task.name}
              done={task.done}
              id={task.id}
              activeTasks={activeTasks}
              updateTask={updateTask}
              deleteTask={deleteTask}
              editTask={editTask}
              editTaskId={editTaskId}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;