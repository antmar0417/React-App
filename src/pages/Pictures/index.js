import React from "react";
import View from "../../components/View";
import { Link } from "@reach/router";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";

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
    <div>
      <Link to="/">Home</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/pictures">Pictures</Link>
      <label>
        <input
          placeholder="Search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      {data &&
        data.map(({ id, description, urls }) => (
          <img key={id} alt={description} src={urls.regular} />
        ))}
    </div>
  );
};

export default Pictures;
