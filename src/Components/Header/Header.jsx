import { useState } from "react";
import normalLogo from "../../images/ruardean_logo.png";
import invertedLogo from "../../images/ruardean_logo_inverted.png";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = ({ sidebarState, toggleSidebar }) => {
  const [theme, setTheme] = useState("");
  const [logo, setLogo] = useState(normalLogo);

  window.addEventListener("scroll", () => {
    let newTheme = window.scrollY == 0 ? "" : "-inverted";
    if (theme !== newTheme) {
      setTheme(newTheme);
      setLogo(newTheme ? invertedLogo : normalLogo);
    }
  });

  return (
    <section className={`header header${theme} theme-colour${theme}`}>
      <Logo theme={theme} />
      <div className="links">
        {/* <Link to ="/home">Home</Link> */}
        {/* <Link to="/about">Our Story</Link>
        <Link to="/events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link> */}
      </div>
      <button onClick={() => toggleSidebar(!sidebarState)}>☰</button>
    </section>
  );
};

export default Header;
