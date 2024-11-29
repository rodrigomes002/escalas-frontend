import React from "react";
import styles from "./Home.module.css";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { OverlayPanel } from "primereact/overlaypanel";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const opParticipantes = React.useRef(null);
  const opRepertorio = React.useRef(null);
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: "#E5E4E4",
    width: 200,
    marginTop: 50,
  };
  const buttonStyle = {
    marginBottom: 20,
  };

  const escalas = [
    {
      dia: 19,
      instrumental: [
        {
          name: "Rodrigo",
        },
        {
          name: "Miguel",
        },
        {
          name: "João",
        },
        {
          name: "Yasmim",
        },
      ],
      vocal: [
        {
          name: "Rodrigo",
        },
        {
          name: "Miguel",
        },
        {
          name: "João",
        },
        {
          name: "Yasmim",
        },
      ],
      musicas: [
        {
          name: "A benção",
          tom: "G",
        },
        {
          name: "Canção do apocalipse",
          tom: "A",
        },
        {
          name: "Senhor te quero",
          tom: "G",
        },
        {
          name: "Seu sangue",
          tom: "E",
        },
      ],
    },
  ];

  return (
    <>
      <div className="item content animeLeft">
        <div className="container">
          <div className={`${styles.header}`}>
            <div className={styles.title}>
              <h2>Novembro 2024</h2>
            </div>

            <div className={styles.title}>
              <Button label="Agendar escala" />
            </div>
          </div>
          <div className={styles.home}>
            {escalas.map((escala, index) => {
              <div key={index}>
                <Card style={cardStyle} title={escala.dia}>
                  <Button
                    style={buttonStyle}
                    onClick={(e) => opParticipantes.current.toggle(e)}
                  >
                    Participantes
                  </Button>
                  <Button onClick={(e) => opRepertorio.current.toggle(e)}>
                    Músicas
                  </Button>
                </Card>

                <div>
                  <OverlayPanel ref={opParticipantes}>
                    <div className={styles.tables}>
                      <div>
                        <DataTable
                          value={escala.instrumental}
                          tableStyle={{ minWidth: "12rem" }}
                        >
                          <Column field="name" header="Nome" />
                        </DataTable>
                      </div>

                      <div>
                        <DataTable
                          value={escala.vocal}
                          tableStyle={{ minWidth: "12rem" }}
                        >
                          <Column field="name" header="Nome" />
                        </DataTable>
                      </div>
                    </div>
                  </OverlayPanel>

                  <OverlayPanel ref={opRepertorio}>
                    <div>
                      <DataTable
                        value={escala.musicas}
                        tableStyle={{ minWidth: "12rem" }}
                      >
                        <Column field="name" header="Nome" />
                        <Column field="tom" header="Tom" />
                      </DataTable>
                    </div>
                  </OverlayPanel>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>

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

      <div className="item footer">footer</div>
    </>
  );
};

export default Home;
