import React from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const { login } = React.useContext(UserContext);

  const [title, setTitle] = React.useState(null);
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/escalas") {
      setTitle("Escalas");
      document.title = "Escalas | Escalas";
    }

    if (location.pathname === "/membros") {
      setTitle("Membros");
      document.title = "Escalas | Membros";
    }

    if (location.pathname === "/repertorio") {
      setTitle("Repertório");
      document.title = "Escalas | Repertório";
    }
  }, [location]);

  return (
    login && (
      <header className="mb">
        <h1 className="box bg-6">{title}</h1>
      </header>
    )
  );
};

export default Header;
