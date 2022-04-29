import React from "react";
import View from "../../components/View";
import "./videos.css";
import { Link } from "@reach/router";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";

const Videos = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://yrgo-assignment.herokuapp.com/entries`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${error}`);
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  }, []);

  return (
    <View className="login-view">
      <Link to="/">Home</Link> <Link to="/videos">Videos</Link>
      <div>
        {data &&
          data.map(({ _id, youtubeId }) => <YouTube videoId={youtubeId} />)}
      </div>
    </View>
  );
};

export default Videos;
