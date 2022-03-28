import React from "react";

export default function TaskItem({ id, completed, onCompleted, children }) {
  const handleChange = (e) => {
    onCompleted(Number(e.target.id), e.target.name, e.target.checked);
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
