import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.svg.png" width={90} />
      </div>
      <div className="search">
        <input className="searchBox" placeholder="Search" />
      </div>
    </header>
  );
}

export default Header;
