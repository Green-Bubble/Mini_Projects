import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeConsumer } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button onClick={toggleTheme}>{theme === "light" ? <FaMoon /> : <FaSun />}</button>;
      }}
    </ThemeConsumer>
  );
};

export default ToggleTheme;
