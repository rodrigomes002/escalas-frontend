import React from "react";
import styles from "./Card.module.css";
import Button from "./Forms/Button";

const Card = ({ setModal }) => {
  const buttonStyle = {
    marginBottom: 15,
    padding: 5,
    backgroundColor: "#D9D9D9",
    color: "#000000",
    fontSize: 15,
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.date}>19</div>
        <Button style={buttonStyle} onClick={setModal}>
          Participantes
        </Button>
        <Button style={buttonStyle} onClick={setModal}>
          Músicas
        </Button>
      </div>
    </>
  );
};

export default Card;
