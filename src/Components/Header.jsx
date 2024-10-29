import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import { UserContext } from "../UserContext";
import Button from "./Forms/Button";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Escalas - Home">
          <Logo />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
            <Button onclick={userLogout}></Button>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
