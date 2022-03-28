import React from "react";

export default function TasksWrapper({ children }) {
  return (
    <table className="table my-6">
      <thead>
        <tr>
          <th>Estado</th>
          <th>Tarea</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
