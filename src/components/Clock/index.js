import React from "react";

class Clock extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    if (this.state.time) return <>{this.state.time}</>;
    else return <>Loading...</>;
  }
}
export default Clock;
