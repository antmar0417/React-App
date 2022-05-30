import React from "react";
import { useState, useEffect } from "react";

// Components
import View from "../../components/View";
import Text from "../../components/Text";
import "./pictures.css";

const Pictures = (props) => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.results);
      });
  }, [query]);

  return (
    <View className="pictures-view">
      <Text className="text">Find your favorite pictures </Text>
      <div className="form">
        <label>
          <input
            className="input"
            placeholder="Search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="pictures-container">
        {data &&
          data.map(({ id, description, urls }) => (
            <img
              className="picture"
              key={id}
              alt={description}
              src={urls.regular}
            />
          ))}
      </div>
    </View>
  );
};

export default Pictures;
