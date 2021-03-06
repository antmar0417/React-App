import React from "react";

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class Date1 extends React.Component {
  state = {
    month: "",
    day: "",
    year: "",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        month: months[new Date().getMonth()],
        day: new Date().getDate(),
        year: new Date().getFullYear(),
      });
    }, 1000);
  }
  render() {
    if (this.state.month && this.state.day && this.state.year)
      return (
        <>
          Date: {this.state.month} {this.state.day}, {this.state.year}
        </>
      );
    else return <>Loading...</>;
  }
}
export default Date1;
