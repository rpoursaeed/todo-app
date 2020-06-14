import React from "react";
import "./style.css";
import Card from "./components/Card";
import AddTask from "./components/AddTask";

export default class App extends React.Component {
  state = {
    todo: [],
    doing: [],
    done: [],
  };

  onSubmit = (value) => {
    //this.setState({todo: [value,...this.state.todo]})
    this.setState(
      (prevState) => ({
        todo: [
          { type: "todo", desc: value, id: Math.floor(Math.random() * 10000) },
          ...prevState.todo,
        ],
      }),
      () => {
        console.log(this.state.todo);
      }
    );
  };

  onMoveRight = (task) => {
    switch (task.type) {
      case "todo":
        task.type = "doing";
        this.setState((prevState) => ({
          todo: prevState.todo.filter((item) => item.id !== task.id),
          doing: [task, ...prevState.doing],
        }));
        return;
      case "doing":
        task.type = "done";
        this.setState((prevState) => ({
          doing: prevState.doing.filter((item) => item.id !== task.id),
          done: [task, ...prevState.done],
        }));
        return;
    }
  };

  onMoveLeft = (task) => {
    switch (task.type) {
      case "doing":
        task.type = "todo";
        this.setState((prevState) => ({
          doing: prevState.doing.filter((item) => item.id !== task.id),
          todo: [task, ...prevState.todo],
        }));
        return;
      case "done":
        task.type = "doing";
        this.setState((prevState) => ({
          done: prevState.done.filter((item) => item.id !== task.id),
          doing: [task, ...prevState.doing],
        }));
        return;
    }
  };

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <AddTask onSubmit={this.onSubmit} />
        </div>
        <div className="app-main">
          <Card
            title="Todo"
            data={this.state.todo}
            onMoveRight={this.onMoveRight}
            onMoveLeft={this.onMoveLeft}
          />
          <Card
            title="Doing"
            data={this.state.doing}
            onMoveRight={this.onMoveRight}
            onMoveLeft={this.onMoveLeft}
          />
          <Card
            title="Done"
            data={this.state.done}
            onMoveLeft={this.onMoveLeft}
            onMoveRight={this.onMoveRight}
          />
        </div>
      </div>
    );
  }
}
