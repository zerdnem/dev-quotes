import React, { Component } from "react";
import "./App.css";

import api from "./api";

class Quote extends Component {
  render() {
    return (
      <div>
        <div id={"quote"}>
          <p>{this.props.quote}</p>
        </div>
        <div id={"writer"}> -{this.props.writer}</div>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { keydown: false, mousedown: false };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onMouseClick = this.onMouseClick.bind(this);
    window.addEventListener("keydown", this.onKeyPress);
    window.addEventListener("mousedown", this.onMouseClick);
  }
  onKeyPress(e) {
    if (e.keyCode === 32) {
      this.setState({ keydown: true });
    }
  }
  onMouseClick(e) {
    this.setState({ mousedown: true });
  }
  componentWillMount() {}
  render() {
    const quote = api[Math.floor(Math.random() * api.length)];
    return (
      <div className={"contain"}>
        {this.state.keydown || this.state.mousedown ? (
          <Quote key={quote.id} quote={quote.content} writer={quote.writer} />
        ) : null}
        <div className={"bottom"}>
          <h2> press space to inspire </h2>
        </div>
      </div>
    );
  }
}

export default App;
