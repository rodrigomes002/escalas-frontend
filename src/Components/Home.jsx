import React from "react";
import Card from "./Card";
import styles from "./Home.module.css";
import Button from "./Forms/Button";
import Modal from "./Modal";

const Home = () => {
  const [modal, setModal] = React.useState(null);
  const cardStyle = {};
  const dados = {};

  return (
    <>
      <div className="container animeLeft">
        <div className={styles.header}>
          <div className={styles.title}>
            <h2>Novembro 2024</h2>
          </div>

          <div className={styles.title}>
            <Button>Agendar escala</Button>
          </div>
        </div>

        <div className={styles.home}>
          <Card style={cardStyle} setModal={setModal} />
        </div>
      </div>
      <div>{modal && <Modal data={dados} setModal={setModal}></Modal>}</div>
    </>
  );
};

export default Home;
