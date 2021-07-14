import './App.scss';

import NavBar from "./components/navbar/NavBar";
import Intro from "./components/intro/Intro";
import About from './components/about/About';
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Menu from './components/menu/Menu';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <About></About>
        <Portfolio></Portfolio>
        <Work></Work>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
