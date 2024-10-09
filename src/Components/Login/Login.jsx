import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordRest from "./LoginPasswordRest";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/create" element={<LoginCreate />} />
          <Route path="/lost-password" element={<LoginPasswordLost />} />
          <Route path="/reset-password" element={<LoginPasswordRest />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
