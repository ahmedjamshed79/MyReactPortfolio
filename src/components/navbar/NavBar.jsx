import "./NavBar.scss";

function NavBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="left">
        <a href="#intro" className="logo">
          Ahmed.
        </a>
      </div>

      <div className="center">
          <a href="#intro">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact me</a>
      </div>

      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
