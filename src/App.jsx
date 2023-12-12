import React, { useState } from "react";
import "./App.scss";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Portfolio from "./components/portfolio/portfolio";
import ContactMe from "./components/contactMe/contactMe";
import Cursor from "./components/cursor/cursor";
import "./fonts/CaviarDreams_Italic.ttf";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div  style={{
      backgroundColor: darkMode ? '#e6c1ff' : '#0c0c1d',
      color: darkMode ? 'black' : 'lightgray'
    }}>
      <Cursor />

      <section id="Homepage">
      <button className="togglebutton" onClick={toggleDarkMode} style={{position:'fixed' , zIndex:'9999'}}>
        {darkMode ?  "Light Mode": "Dark Mode"}
      </button>
        <Navbar />
        <MainPage darkMode={darkMode} />
      </section>

      <section id="Services">
        <Parallax type="Services" darkMode={darkMode}/>
      </section>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <section id="contact">
        <ContactMe />
      </section>
    
    </div>
  );
}
