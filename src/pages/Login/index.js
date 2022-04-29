import React from "react";
import Button from "./../../components/Button";

import Logo from "./../../components/Logo";
import Title from "./../../components/Title";
import View from "../../components/View";
import "./login.css";
import { navigate } from "@reach/router";

const LoginPage = (props) => {
  const [count, setCount] = React.useState(0);
  const url = `https://accounts.spotify.com/authorize?client_id=78790f6752d9462babd5553dc95d66fb&show_dialog=true&response_type=token&redirect_uri=http://localhost:3000`;

  return (
    <View className="login-view">
      <Logo size="small" style={{ marginBottom: "50px" }} />
      <Title>Find your favorite music </Title>
      <Button handleClick={() => navigate(url)}>Login to spotify</Button>
      <p>{count > 0 && count}</p>
    </View>
  );
};

export default LoginPage;
