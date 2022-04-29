import React from "react";
import { Redirect } from "@reach/router";
import Logo from "../../components/Logo";
import View from "../../components/View";
import SearchField from "../../components/SearchField";
import SearchItem from "../../components/SearchItem";
import getAccessToken from "../../functions/getAccessToken";
import "./home.css";

const HomePage = () => {
  const [searchResult, setSearchResult] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  const accessToken = getAccessToken();

  React.useEffect(() => {
    const rootUrl = "https://api.spotify.com/v1/search";

    if (!searchText) {
      return;
    }

    fetch(`${rootUrl}?q=${searchText}&type=album&limit=5`, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.albums && json.albums.items) {
          setSearchResult(json.albums.items);
        }
      });
  }, [searchText, accessToken]);

  if (!accessToken) {
    return <Redirect from="" to="/login" noThrow />;
  }

  return (
    <View className="home-view">
      <Logo size="small" style={{ marginBottom: "50px" }} />
      <SearchField handleChange={(e) => setSearchText(e.target.value)} />

      <div
        className="search-items"
        style={{ width: "100%", marginBottom: "100px" }}
      >
        {searchResult &&
          searchText &&
          searchResult.map((item, key) => {
            return (
              <SearchItem
                key={key}
                image={item.images[0].url}
                title={item.artists[0].name}
                album={item.name}
                year={new Date(item.release_date).getFullYear()}
                playUrl={item.external_urls.spotify}
              />
            );
          })}
      </div>
    </View>
  );
};

export default HomePage;
