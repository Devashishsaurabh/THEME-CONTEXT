// import "./App.css";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./contexts/ThemeContext";
import "./index.css";
function App() {
  const {isLight} = useContext(ThemeContext);
  return (
    <div className={`body ${isLight? "light" : "dark"}`}>
      <Navbar />
    </div>
  );
}

export default App;
