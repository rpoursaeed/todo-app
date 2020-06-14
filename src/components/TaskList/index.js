import React from "react";
import "./TaskList.css";
import Task from "../Task";

const TaskList = ({ data, onMoveRight, onMoveLeft }) => {
  return (
    <ul className="task-list">
      {data.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            onMoveRight={onMoveRight}
            onMoveLeft={onMoveLeft}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
