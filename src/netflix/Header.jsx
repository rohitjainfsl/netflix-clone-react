import logo from "./assets/netflix-logo.png";
import emoji from "./assets/green-blue-emoji.png";
import { useState } from "react";

function Header() {
  const [darkHeader, setDarkHeader] = useState(false);
  window.onscroll = function () {
    if (window.scrollY > window.innerHeight - 300) setDarkHeader(true);
    else setDarkHeader(false);
  };
  return (
    <nav className={darkHeader ? 'dark' : ''}>
      <a href="">
        <img src={logo} className="logo" alt="Netflix Logo" />
      </a>
      <a href="">
        <img src={emoji} alt="Emoji" />
      </a>
    </nav>
  );
}

export default Header;
