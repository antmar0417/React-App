import React from "react";
import { Router } from "@reach/router";
import themes from "./theme/themes";

// components
import ThemeIcon from "./components/ThemeIcon";
import Navbar from "./components/Navbar";

// pages
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
      <Navbar />
      <ThemeIcon handleClick={toggleDarkMode} />
      <Router>
        <HomePage path="/" />
        <PicturesPage path="/pictures" />
        <NotFound default />
      </Router>
    </div>
  );
};

export default App;
