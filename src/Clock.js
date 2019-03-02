import React from "react";

class Clock extends React.Component {
  state = {
    date: new Date()
  };
  componentDidMount() {
    this.start();
  }
  componentWillUnmount() {
    this.stop();
  }
  start = () => {
    this.TimerID = setInterval(() => this.tick(), 1000);
  };
  stop = () => {
    clearInterval(this.TimerID);
  };

  render() {
    return (
      <div className="display-1">
        <h1>{this.state.date.toLocalTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
