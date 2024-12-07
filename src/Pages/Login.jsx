import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const { userLogin, login } = React.useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (username.trim() === "" || password.trim() === "") {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    userLogin(username, password);
    setError("");
  };

  return (
    <div className="login-container">
      <Card title="Login" style={{ width: "400px" }} className="p-mt-5">
        {error && <div className="p-text-danger p-mb-3">{error}</div>}
        <div className="p-mb-4">
          <label htmlFor="username">Nome de usuário</label>
          <InputText
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-inputtext p-component"
            style={{ width: "100%" }}
          />
        </div>
        <div className="p-mb-4">
          <label htmlFor="password">Senha</label>
          <InputText
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-inputtext p-component"
            style={{ width: "100%" }}
          />
        </div>
        <div className="p-d-flex p-jc-center">
          <Button
            label="Entrar"
            onClick={handleSubmit}
            className="p-button-rounded p-mb-3"
            style={{ width: "100%" }}
          />
        </div>
      </Card>
    </div>
  );
};

export default Login;
