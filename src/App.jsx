import "./App.scss";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Portfolio from "./components/portfolio/portfolio";
import ContactMe from "./components/contactMe/contactMe";
import Cursor from "./components/cursor/cursor";
export default function App() {
  return (
    <div>
      <Cursor />

      <section id="Homepage">
        <Navbar />
        <MainPage />
      </section>

      <section id="Services">
        <Parallax type="Services" />
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
