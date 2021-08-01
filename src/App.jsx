import "./App.scss";

import NavBar from "./components/navbar/NavBar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState} from "react";

function App() {
  // useEffect(() => {
  //   function SmoothVerticalScrolling(e, time, where) {
  //     var eTop = e.getBoundingClientRect().top;
  //     var eAmt = eTop / 100;
  //     var curTime = 0;
  //     while (curTime <= time) {
  //       window.setTimeout(SVS_B, curTime, eAmt, where);
  //       curTime += time / 100;
  //     }
  //   }

  //   function SVS_B(eAmt, where) {
  //     if (where === "center" || where === "") window.scrollBy(0, eAmt / 2);
  //     if (where === "top") window.scrollBy(0, eAmt);
  //   }
  // }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <About></About>
        <Skills id="skills-container"></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
