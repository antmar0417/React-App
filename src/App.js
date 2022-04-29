import React from "react";
import { Router } from "@reach/router";
import themes from "./theme/themes";
import ThemeIcon from "./components/ThemeIcon";

// pages components
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  const [theme, setTheme] = React.useState("dark");

  // Lesson 04
  // const [movie, setMovie] = useState("Pick a movie");
  // const [actor, setActor] = useState("Pick a actor");

  // useEffect(() => {
  //   console.log("you picked a movie");
  // }, [movie]);

  // useEffect(() => {
  //   fetch(``)
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // }, [inputText]);

  const toggleDarkMode = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
  };

  return (
    <div className="App" style={themes[theme]}>
      <ThemeIcon handleClick={toggleDarkMode} />
      <Router>
        <HomePage path="/" loggedIn={true} />
        <LoginPage path="/login" />
        <NotFound default />
      </Router>

      {/* <p>{movie}</p>
      <button onClick={() => setMovie("Mean girls")}>Mean girls</button>

      <button onClick={() => setMovie("Mean girls")}>Mean girls</button>
      <p>{actor}</p> */}
    </div>
  );
};

export default App;
