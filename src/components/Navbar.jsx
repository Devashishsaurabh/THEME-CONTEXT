import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}> {`Switch To ${isLight? "Dark Mode" : "Light Mode"}  `} </button>
    </div>
  );
};

export default Navbar;
