import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import { UserContext } from "../Context/UserContext";

const Sidenav = () => {
  const { login } = React.useContext(UserContext);

  const styleLogo = {
    width: 50,
    height: 50,
    fill: "#fff",
    marginTop: 20,
  };

  return (
    login && (
      <nav className="sidenav box bg-3">
        <Link to="/escalas" aria-label="Escalas - Home">
          <Logo style={styleLogo} />
        </Link>
        <ul>
          <li>
            <span>
              <i className="pi pi-calendar"></i>
            </span>
            <NavLink to="/escalas">Escalas</NavLink>
          </li>
          <li>
            <span>
              <i className="pi pi-headphones"></i>
            </span>
            <NavLink to="/repertorio">Repertorio</NavLink>
          </li>
          <li>
            <span>
              <i className="pi pi-user"></i>
            </span>
            <NavLink to="/membros">Membros</NavLink>
          </li>
        </ul>
      </nav>
    )
  );
};

export default Sidenav;
