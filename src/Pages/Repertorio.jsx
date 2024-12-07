import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Error from "../Components/Helper/Error";
import { Button } from "primereact/button";
import {
  MUSICAS_DELETE,
  MUSICAS_GET,
  MUSICAS_POST,
  MUSICAS_PUT,
} from "../Services/ApiMusicas";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const Repertorio = () => {
  const { request } = useFetch();
  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [cantor, setCantor] = useState("");
  const [tom, setTom] = useState("");
  const [error, setError] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [musicas, setMusicas] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchMusicas();
  }, []);

  const fetchMusicas = async () => {
    const { url, options } = MUSICAS_GET();
    const { json } = await request(url, options);
    setMusicas(json);
  };

  const validate = (value) => {
    if (!value) {
      setError("Preencha o valor.");
      return false;
    }
    setError(null);
    return true;
  };

  const cleanForm = () => {
    setNome("");
    setError(null);
    setIsUpdate(false);
  };

  const closeModal = () => {
    cleanForm();
    setVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate(nome) || !validate(cantor)) return;

    const musica = {
      id: isUpdate ? id : 0,
      nome,
      cantor: cantor,
      tom: tom,
    };

    const action = isUpdate ? MUSICAS_PUT(musica, id) : MUSICAS_POST(musica);
    const { url, options } = action;
    const { response } = await request(url, options);

    if (response.ok) {
      fetchMusicas();
      cleanForm();
      closeModal();
    }
  };

  const deleteRepertorio = async (id) => {
    const { url, options } = MUSICAS_DELETE(id);
    const { response } = await request(url, options);
    if (response.ok) fetchMusicas();
  };

  const updateRepertorio = (musica) => {
    setVisible(true);
    setNome(musica.nome);
    setId(musica.id);
    setIsUpdate(true);
  };

  return (
    <>
      <div className="flex-end mb">
        <Button icon="pi pi-plus" onClick={() => setVisible(true)} />
        <Dialog
          header="Novo música"
          visible={visible}
          onHide={() => closeModal()}
          className="modal"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-column gap-2 mb mt">
              <label htmlFor="nome">Nome</label>
              <InputText
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onBlur={(e) => validate(e.target.value)}
              />
            </div>

            <div className="flex flex-column gap-2 mb mt">
              <label htmlFor="cantor">Cantor</label>
              <InputText
                id="cantor"
                value={cantor}
                onChange={(e) => setCantor(e.target.value)}
                onBlur={(e) => validate(e.target.value)}
              />
            </div>

            <div className="flex flex-column gap-2 mb mt">
              <label htmlFor="tom">Tom</label>
              <InputText
                id="tom"
                value={tom}
                onChange={(e) => setTom(e.target.value)}
              />
            </div>

            {error && <Error error={error} />}

            <div className="flex-end mt">
              <Button
                label={isUpdate ? "Atualizar" : "Salvar"}
                icon="pi pi-check"
                autoFocus
              />
            </div>
          </form>
        </Dialog>
      </div>

      {musicas.length > 0 ? (
        musicas.map((musica) => (
          <div key={musica.id} className="box mb">
            <div className="flex">
              <div>
                <h3>{musica.nome}</h3>
                <p>{musica.cantor}</p>
                <p>{musica.tom}</p>
              </div>

              <div className="flex-end">
                <Button
                  icon="pi pi-pencil"
                  onClick={() => updateRepertorio(musica)}
                  className="p-button-text"
                />
                <Button
                  icon="pi pi-trash"
                  onClick={() => deleteRepertorio(musica.id)}
                  className="p-button-text"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className=" box flex">
          <p>Nenhuma música cadastrada.</p>
        </div>
      )}
    </>
  );
};

export default Repertorio;
