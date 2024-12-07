import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Error from "../Components/Helper/Error";
import { Button } from "primereact/button";
import {
  MUSICOS_DELETE,
  MUSICOS_GET,
  MUSICOS_POST,
  MUSICOS_PUT,
} from "../Services/ApiMusicos";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const Membros = () => {
  const { request } = useFetch();
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState(null);
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [musicos, setMusicos] = useState([]);
  const [visible, setVisible] = useState(false);

  const funcoes = [
    { name: "Vocal", code: "1" },
    { name: "Teclado", code: "2" },
    { name: "Violão", code: "3" },
    { name: "Guitarra", code: "4" },
    { name: "Baixo", code: "5" },
    { name: "Bateria", code: "6" },
  ];

  useEffect(() => {
    fetchMusicos();
  }, []);

  const fetchMusicos = async () => {
    const { url, options } = MUSICOS_GET();
    const { json } = await request(url, options);
    setMusicos(json);
  };

  const getFuncao = (funcao) => funcoes.find((f) => f.code === funcao);

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
    setFuncao(null);
    setError(null);
    setIsUpdate(false);
  };

  const closeModal = () => {
    cleanForm();
    setVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate(nome) || !validate(funcao)) return;

    const membro = {
      id: isUpdate ? id : 0,
      nome,
      funcao: parseInt(funcao.code),
    };

    const action = isUpdate ? MUSICOS_PUT(membro, id) : MUSICOS_POST(membro);
    const { url, options } = action;
    const { response } = await request(url, options);

    if (response.ok) {
      fetchMusicos();
      cleanForm();
      closeModal();
    }
  };

  const deleteMembro = async (id) => {
    const { url, options } = MUSICOS_DELETE(id);
    const { response } = await request(url, options);
    if (response.ok) fetchMusicos();
  };

  const updateMembro = (membro) => {
    setVisible(true);
    setNome(membro.nome);
    setFuncao(getFuncao(membro.funcao.toString()));
    setId(membro.id);
    setIsUpdate(true);
  };

  return (
    <>
      <div className="flex-end mb">
        <Button icon="pi pi-plus" onClick={() => setVisible(true)} />
        <Dialog
          header="Novo membro"
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

            <div className="flex flex-column gap-2">
              <label>Função</label>
              <Dropdown
                value={funcao}
                options={funcoes}
                optionLabel="name"
                placeholder="Selecione a função"
                onChange={(e) => setFuncao(e.value)}
                onBlur={(e) => validate(e.value)}
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
      {musicos.length > 0 ? (
        musicos.map((musico) => (
          <div key={musico.id} className="box mb">
            <div className="flex">
              <div>
                <h3>{musico.nome}</h3>
                <p>{getFuncao(musico.funcao.toString()).name}</p>
              </div>

              <div className="flex-end">
                <Button
                  icon="pi pi-pencil"
                  onClick={() => updateMembro(musico)}
                  className="p-button-text"
                />
                <Button
                  icon="pi pi-trash"
                  onClick={() => deleteMembro(musico.id)}
                  className="p-button-text"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className=" box flex">
          <p>Nenhum membro cadastrado.</p>
        </div>
      )}
    </>
  );
};

export default Membros;
