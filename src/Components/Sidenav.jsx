import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/logo.svg";

const Sidenav = () => {
  const styleLogo = {
    width: 50,
    height: 50,
    fill: "#fff",
    marginTop: 20,
  };

  return (
    <nav className="sidenav box bg-3">
      <Link to="/" aria-label="Escalas - Home">
        <Logo style={styleLogo} />
      </Link>
      <ul>
        <li>
          <span>{/*icon*/}</span>
          <NavLink to="/">Escalas</NavLink>
        </li>
        <li>
          <span>{/*icon*/}</span>
          <NavLink to="/repertorio">Repertorio</NavLink>
        </li>
        <li>
          <span>{/*icon*/}</span>
          <NavLink to="/membros">Membros</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
