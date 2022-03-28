import React from "react";

export default function TaskInput({
  name,
  value,
  onAddTask,
  onNewTaskChange,
  children,
}) {
  // -**********************************-
  // Handlers
  const handleChange = (e) => {
    onNewTaskChange(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[name].value,
      newTask = {
        id: Math.floor(Math.random() * 100) + 200,
        title: inputValue,
        completed: Math.random() > 0.5 ? true : false,
      };
    onAddTask(newTask);
  };
  // -**********************************-
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor={name} className="label">
          {children}
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name={name}
            id={name}
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="button is-primary"
            type="submit"
            value="Añadir tarea"
          />
        </div>
      </div>
    </form>
  );
}
