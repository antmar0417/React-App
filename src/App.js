import React from "react";
import { Router } from "@reach/router";
import themes from "./theme/themes";
import ThemeIcon from "./components/ThemeIcon";

// pages components
import HomePage from "./pages/Home";
import PicturesPage from "./pages/Pictures";
import VideosPage from "./pages/Videos";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  const [theme, setTheme] = React.useState("dark");

  const toggleDarkMode = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
  };

  return (
    <div className="App" style={themes[theme]}>
      <ThemeIcon handleClick={toggleDarkMode} />
      <Router>
        <HomePage path="/" />
        <VideosPage path="/videos" />
        <PicturesPage path="/pictures" />
        <NotFound default />
      </Router>
    </div>
  );
};

export default App;
