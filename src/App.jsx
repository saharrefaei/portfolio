import "./App.scss";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Portfolio from "./components/portfolio/portfolio";
export default function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <MainPage />
      </section>

      <section id="Services">
        <Parallax type="Services" />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <a href="contact"> acontact</a>
      </section>
    </div>
  );
}
