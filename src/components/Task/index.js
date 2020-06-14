import React from "react";
import "./Task.css";

const Task = ({ task, onMoveRight, onMoveLeft }) => {
  return (
    <li className="task">
      {task.type !== "todo" ? (
        <a
          href="#"
          className="task-left-button"
          onClick={() => onMoveLeft(task)}
        >
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </a>
      ) : (
        <div style={{ flex: 1 }}></div>
      )}
      <p className="task-desc">{task.desc}</p>
      {task.type !== "done" ? (
        <a
          href="#"
          className="task-right-button"
          onClick={() => {
            onMoveRight(task);
          }}
        >
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </a>
      ) : (
        <div style={{ flex: 1 }}></div>
      )}
    </li>
  );
};

export default Task;
