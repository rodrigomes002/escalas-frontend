import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ data, setModal }) => {
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModal(null);
  }

  return (
    <>
      <div className={styles.modal} onClick={handleOutsideClick}>
        <div>TESTE aaa</div>
      </div>
    </>
  );
};

export default Modal;
