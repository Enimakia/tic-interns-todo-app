import React, { useState } from "react";
import Task from "./Task";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([
    { name: "Buy a new chair", done: false },
    { name: "Renew internet subscription", done: false },
    { name: "Purchase groceries", done: true },
    { name: "Finish this todo application", done: false },
  ]);

  const deleteTask = (idx) => {
    setTasks(prevTasks => prevTasks.filter((task, i) => i !== idx));
  };

  const editTask = (idx) => {
    setTasks(prevTasks => {
      const task = prevTasks[idx];
      task.name = taskName;
      return prevTasks.map((task, i) => i === idx ? task : prevTasks[i]);
    });
  };

  const markTaskAsDone = (idx) => {
    setTasks(prevTasks => {
      const task = prevTasks[idx];
      task.done = !task.done;
      return prevTasks.map((task, i) => i === idx ? task : prevTasks[i]);
    });
  };

  return (
    <>
      <h1>My Todo app</h1>
      <form onSubmit={function(event) {
        event.preventDefault();

         setTasks([...tasks, { name: taskName, done: false }]);
         setTaskName("");
        // tasks.push(taskName);
        // setTasks(tasks);
      }}>
        <input type="text" placeholder="Enter task" onChange={function(event){
          setTaskName(event.target.value);
        }} value={taskName} />
        <button type="submit">
          Create
        </button>
      </form>

      <div>
        <ul>
          {tasks.map((task, idx) => 
          <Task name={task.name} done={task.done} updateTask={updateTask} idx={idx} />)}
        </ul>
      </div>
    </>
  );
}

export default App;