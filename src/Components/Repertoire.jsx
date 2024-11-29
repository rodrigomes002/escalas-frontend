import React, { useEffect, useState } from "react";
import styles from "./Repertoire.module.css";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { classNames } from "primereact/utils";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const Mermbers = () => {
  const [members, setMembers] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState(null);

  const functions = [
    { name: "Guitarra" },
    { name: "Bateria" },
    { name: "Baixo" },
    { name: "Teclado" },
    { name: "Violão" },
    { name: "Voz" },
  ];

  const formStyle = {
    width: 300,
  };

  useEffect(() => {
    setMembers([
      {
        id: 1,
        name: "Rodrigo",
        funcao: "Guitarra",
      },
      {
        id: 2,
        name: "Miguel",
        funcao: "Bateria",
      },
      {
        id: 3,
        name: "João",
        funcao: "Baixo",
      },
    ]);
  }, []);

  const columns = [
    { field: "name", header: "Name" },
    { field: "funcao", header: "Função" },
  ];

  const deleteBodyTemplate = (member) => {
    return (
      <>
        <Button icon="pi pi-trash" />
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Role: ${selectedFunction}`);
    setVisible(false);
  };

  return (
    <>
      <div className="item content animeLeft">
        <div className="container">
          <div className={`${styles.header}`}>
            <div className="title">
              <h2>Repertório</h2>
            </div>

            <div className="title">
              <Button label="Nova música" onClick={() => setVisible(true)} />

              <Dialog
                header="Nova música"
                visible={visible}
                style={{ width: "25vw" }}
                footer={
                  <div>
                    <Button
                      label="Enviar"
                      icon="pi pi-check"
                      onClick={handleSubmit}
                      className="p-button-primary"
                    />
                  </div>
                }
                onHide={() => {
                  if (!visible) return;
                  setVisible(false);
                }}
              >
                <div className={styles.membersForm}>
                  <div className={styles.margin10}>
                    <InputText style={formStyle} placeholder="Nome" />
                  </div>
                  <div className={styles.margin10}>
                    <Dropdown
                      style={formStyle}
                      value={selectedFunction}
                      onChange={(e) => setSelectedFunction(e.value)}
                      options={functions}
                      optionLabel="name"
                      placeholder="Selecione a função"
                      className="w-full md:w-14rem"
                    />
                  </div>
                </div>
              </Dialog>
            </div>
          </div>

          <div className={styles.main}>
            <DataTable value={members} tableStyle={{ minWidth: "50rem" }}>
              {columns.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} />
              ))}
              <Column body={deleteBodyTemplate} />
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mermbers;
