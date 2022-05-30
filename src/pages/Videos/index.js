import React from "react";
import { useState, useEffect } from "react";

// Components
import View from "../../components/View";
import Text from "../../components/Text";
import "./videos.css";

const Videos = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://yrgo-assignment.herokuapp.com/entries`)
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
            <iframe
              frameBorder="0"
              allowFullScreen
              title="Youtube player"
              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
              src={`https://youtube.com/embed/${youtubeId}?autoplay=0`}
            ></iframe>
          </div>
        ))}
    </View>
  );
};

export default Videos;
