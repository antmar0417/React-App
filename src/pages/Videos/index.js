import React from "react";
import { useState, useEffect } from "react";

// Components
import View from "../../components/View";
import Text from "../../components/Text";
import "./videos.css";
import YoutubeEmbed from "../../components/YoutubeEmbed";

const Videos = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://yrgo-assignment.herokuapp.com/entries/")
      .then((response) => {
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
      });
  }, []);

  return (
    <View className="videos-view">
      <Text className="text">Find your favorite videos </Text>
      {data &&
        data.map(({ _id, youtubeId }) => (
          <div className="rendered-videos" key={_id}>
            <YoutubeEmbed embedId={youtubeId} />
          </div>
        ))}
    </View>
  );
};

export default Videos;
