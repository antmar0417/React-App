import React from "react";
import { useState, useEffect } from "react";

// Components
import View from "../../components/View";
import Text from "../../components/Text";
import "./pictures.css";

const Pictures = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${error}`);
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.results);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  }, [query]);

  return (
    <View className="pictures-view">
      <Text>Find your favorite pictures </Text>
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
