import "./App.scss";

import NavBar from "./components/navbar/NavBar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({duration: 1000, once: true});
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro className="intro"></Intro>
        <About></About>
        <Skills id="skills-container"></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
