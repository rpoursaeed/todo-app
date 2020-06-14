import React from "react";
import "./AddTask.css";
class AddTask extends React.Component {
  state = { value: "" };

  onchange = (event) => {
    this.setState({ value: event.target.value });
  };

  onAddClick = () => {
    if (this.state.value !== "") this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <div className="form-header">
        <input
          className="text-input"
          value={this.state.value}
          onChange={this.onchange}
        />
        <a href="#" className="add-button" onClick={this.onAddClick}>
          Add Task
        </a>
      </div>
    );
  }
}

export default AddTask;
