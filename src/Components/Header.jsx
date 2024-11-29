import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import { UserContext } from "../UserContext";
import Button from "./Forms/Button";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  const styleLogo = {
    width: 50,
    height: 50,
    fill: "#fff",
    marginTop: 20,
  };
  return (
    <>
      <div className="item logo">
        <Link to="/" aria-label="Escalas - Home">
          <Logo style={styleLogo} />
        </Link>
      </div>

      <div className="item nav">
        <div className={styles.login}>
          {data ? (
            <Link to="/conta">
              {data.nome}
              <Button onclick={userLogout}></Button>
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
