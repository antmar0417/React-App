import React from "react";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import View from "../../components/View";
import "./login.css";
import { Link } from "@reach/router";

const Videos = (props) => {
  return (
    <View className="login-view">
      <Logo size="small" style={{ marginBottom: "50px" }} />
      <Title>Find your favorite video </Title>
      <Link to="/">Home</Link> <Link to="/videos">Videos</Link>
    </View>
  );
};

export default Videos;
