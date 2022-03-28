import React, { useState, useEffect } from "react";
import TasksWrapper from "./components/TasksWrapper";
import TaskItem from "./components/TaskItem";
import "./App.scss";

const TASKS_API = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [tasks, setTasks] = useState([]);

  // Lifecycle
  useEffect(() => {
    const getTasks = async (url) => {
      let res = await fetch(url);
      let tasks = await res.json();
      setTasks(
        tasks.map((task) => {
          return {
            id: task.id,
            title: task.title,
            completed: task.completed,
          };
        })
      );
    };
    getTasks(TASKS_API);
  }, []);

  // Events
  const handleCompleted = (id, name, completed) => {
    const updatedTask = { id, title: name, completed };
    const indexTaskToUpdate = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks.splice(indexTaskToUpdate, 1, updatedTask);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1 className="title is-1 has-text-centered">Simple Tasks List</h1>
      <TasksWrapper>
        {tasks.map((task) => (
          <TaskItem
            id={task.id}
            completed={task.completed}
            onCompleted={handleCompleted}
            key={task.id}
          >
            {task.title}
          </TaskItem>
        ))}
      </TasksWrapper>
    </div>
  );
}

export default App;
