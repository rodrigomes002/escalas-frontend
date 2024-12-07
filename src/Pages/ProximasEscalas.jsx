import React from "react";
import { UserContext } from "../Context/UserContext";

const ProximasEscalas = () => {
  const { login } = React.useContext(UserContext);
  return (
    !login && (
      <div className="proximas-escalas-container">
        <header className="mb">
          <h1 className="box bg-6">Próximas escalas</h1>
        </header>

        <div className="flex-column mb">
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
        </div>
      </div>
    )
  );
};

export default ProximasEscalas;
