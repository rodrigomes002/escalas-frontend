import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import styles from "./Sidenav.module.css";

const Sidenav = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    marginBottom: 20,
  };

  return (
    <>
      <div className="item sidenav">
        <div className={styles.menu}>
          <Button style={buttonStyle} onClick={() => navigate("/")}>
            Escalas
          </Button>
          <Button style={buttonStyle} onClick={() => navigate("/repertorio")}>
            Repertório
          </Button>
          <Button style={buttonStyle} onClick={() => navigate("/membros")}>
            Membros
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
