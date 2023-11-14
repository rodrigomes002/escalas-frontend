import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Escalas - Home">
          <Logo />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
