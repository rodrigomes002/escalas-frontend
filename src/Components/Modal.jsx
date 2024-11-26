import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ data, setModal }) => {
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModal(null);
  }

  return (
    <>
      <div className={styles.modal} onClick={handleOutsideClick}>
        <div className={styles.content}>
          <div>
            <h2>Participantes</h2>
          </div>
          <div>
            <ul>
              <li>Rodrigo</li>
              <li>Rodrigo</li>
              <li>Rodrigo</li>
              <li>Rodrigo</li>
              <li>Rodrigo</li>
              <li>Rodrigo</li>
              <li>Rodrigo</li>
              <li>Rodrigo</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
