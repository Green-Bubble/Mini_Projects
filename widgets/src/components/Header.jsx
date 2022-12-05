import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item" Children="Accordion"></Link>
      <Link href="/list" className="item" Children="Search"></Link>
      <Link href="/dropdown" className="item" Children="Dropdown"></Link>
      <Link href="/translate" className="item" Children="Translate"></Link>
    </div>
  );
};

export default Header;
