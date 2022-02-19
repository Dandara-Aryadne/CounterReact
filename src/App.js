import React, { Component } from "react";
import "./styles.css";

export default class Counter extends Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState({
      count: this.state.count < 10 ? this.state.count + 1 : this.state.count
    });
  };

  remove = () => {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : this.state.count
    });
  };

  render() {
    const { count } = this.state;
    const { add, remove } = this;
    return (
      <div class="container">
        <h1>React Counter App</h1>
        <div class="counter">
          <button class="Button" onClick={add}>
            {" "}
            +{" "}
          </button>
          <h2>{count}</h2>
          <button class="Button" onClick={remove}>
            {" "}
            -{" "}
          </button>
        </div>
      </div>
    );
  }
}
