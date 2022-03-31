import React, { useState, useEffect } from "react";
import TasksWrapper from "./components/TasksWrapper";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import "./App.scss";

const TASKS_API = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [newTask, setNewTask] = useState("");
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
  const handleCompleted = (completedTask) => {
    const newTasks = tasks.map((el) =>
      el.id === completedTask.id ? completedTask : el
    );
    setTasks(newTasks);
  };

  const handleNewTaskChange = (value) => {
    setNewTask(value);
  };

  const handleAddTask = (task) => {
    setTasks([task, ...tasks]);
    setNewTask("");
  };

  return (
    <div className="App">
      <h1 className="title is-1 has-text-centered">Simple Tasks List</h1>
      <TaskInput
        name="new-task"
        value={newTask}
        onNewTaskChange={handleNewTaskChange}
        onAddTask={handleAddTask}
      >
        Nueva tarea
      </TaskInput>
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
