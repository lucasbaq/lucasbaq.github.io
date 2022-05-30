import React, { useEffect, useState } from "react";
import menuImg from '../styles/images/menu.svg';
import XImg from '../styles/images/X.png';
import "../styles/Header.css";
import Menu from "./Menu";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    return () => setDropdown(false);
  }, [])
  return (
      <header>
        <button
          type="button"
          onClick={ () => setDropdown(!dropdown) }
        >
          <img
            className={dropdown ? "menu-img" : "menu-img-twisted"}
            src={ dropdown ? XImg : menuImg } alt="button fill"
          />
        </button>
        { dropdown ? <Menu /> : null }
      </header>
  );
}

export default Header;