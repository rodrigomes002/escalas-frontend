import { Button } from "primereact/button";
import React from "react";

const Escalas = () => {
  return (
    <>
      <div className="flex-end mb">
        <div>
          <Button>Nova escala</Button>
        </div>
      </div>
      <div className="box mb">
        <h2>19/12/2024</h2>

        <div className="flex">
          <div>
            <h3>Instrumental</h3>
            <ul>
              <li>Rodrigo</li>
              <li>Miguel</li>
              <li>Yasmim</li>
              <li>João</li>
            </ul>
          </div>

          <div>
            <h3>Vocal</h3>
            <ul>
              <li>Daniele</li>
              <li>Camila</li>
              <li>Driely</li>
              <li>Matheus</li>
            </ul>
          </div>

          <div>
            <h3>Músicas - Manhã</h3>
            <ul>
              <li>Cancão do apocalipse</li>
              <li>Deus é Bom</li>
              <li>A benção</li>
              <li>Na casa</li>
            </ul>
          </div>

          <div>
            <h3>Músicas - Noite</h3>
            <ul>
              <li>Cancão do apocalipse</li>
              <li>Deus é Bom</li>
              <li>A benção</li>
              <li>Na casa</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Escalas;
