import React from "react";
import { CREATE_POST, LOGIN_POST } from "../Services/ApiUsuarios";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function getUser(token) {
    setData(token);
    setLogin(true);
  }

  async function createUser(username, password) {
    try {
      const [url, options] = await CREATE_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error:  ${response.statusText}`);
      userLogin(username, password);
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = await LOGIN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error:  ${response.statusText}`);
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      setLogin(true);
      navigate("/escalas");
    } catch (error) {
      setError(error.message);
      console.log(error);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          //TODO: VALIDAR TOKEN
          // setError(null);
          // setLoading(true);
          // const { url, options } = TOKEN_VALIDATE_POST(token);
          // const response = await fetch(url, options);
          // if (!response.ok) throw new Error("Token inválido");
          // await getUser(token);
        } catch (err) {
          //userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, createUser, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
