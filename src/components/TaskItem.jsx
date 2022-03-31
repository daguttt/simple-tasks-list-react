import React from "react";

export default function TaskItem({ id, completed, onCompleted, children }) {
  const handleChange = (e) => {
    const completedTask = {
      id: Number(e.target.id),
      title: e.target.name,
      completed: e.target.checked,
    };
    onCompleted(completedTask);
  };
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          name={children}
          id={id}
          checked={completed}
          onChange={handleChange}
          style={{ cursor: "pointer" }}
        />
      </td>
      <td>{children}</td>
    </tr>
  );
}
