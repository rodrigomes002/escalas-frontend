import React from "react";
import { UserContext } from "../Context/UserContext";

const Container = ({ children }) => {
  const { login } = React.useContext(UserContext);

  return login ? (
    <div className="container">{children}</div>
  ) : (
    <div className="no-login-container">{children}</div>
  );
};

export default Container;
