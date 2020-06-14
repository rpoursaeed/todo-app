import React from "react";
import "./Card.css";
import TaskList from "../TaskList";

const Card = ({ title, data, onMoveRight, onMoveLeft }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <TaskList data={data} onMoveRight={onMoveRight} onMoveLeft={onMoveLeft} />
    </div>
  );
};

export default Card;
