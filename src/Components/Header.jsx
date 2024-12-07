import React from "react";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const { login } = React.useContext(UserContext);

  return (
    login && (
      <header className="mb">
        <h1 className="box bg-6">Escalas</h1>
      </header>
    )
  );
};

export default Header;
