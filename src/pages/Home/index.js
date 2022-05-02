import React from "react";
import SeasonDisplay from "../../components/SeasonDisplay";
import Spinner from "../../components/Spinner";

class HomePage extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          longtitude: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Pleace accept location request!" />;
  }

  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

export default HomePage;
