import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Error from "../Components/Helper/Error";
import { Button } from "primereact/button";
import {
  DELETE_MEMBRO,
  GET_MUSICOS,
  POST_MEMBRO,
  PUT_MEMBRO,
} from "../Services/api";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const Membros = () => {
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState(null);
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);

  const [isUpdate, setIsUpdate] = useState(false);

  const { request } = useFetch();

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

  function getFuncoes(instrumento) {
    return funcoes.find((f) => parseInt(f.code) === instrumento).name;
  }

  function getFuncao(instrumento) {
    const funcao = funcoes.find((f) => f.code === instrumento);
    return funcao;
  }

  useEffect(() => {
    fetchMusicos();
  }, []);

  async function fetchMusicos() {
    const { url, options } = GET_MUSICOS();
    const { json } = await request(url, options);
    setMusicos(json);
  }

  function validate(value) {
    if (value === undefined || value.length === 0) {
      setError("Preencha o valor.");
      return false;
    }

    setError(null);
    return true;
  }

  function clean() {
    setNome("");
    setFuncao("");
    setError(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let obj = {
      id: 0,
      nome: nome,
      instrumento: parseInt(funcao.code),
    };

    if (validate(nome) && validate(funcao)) {
      if (isUpdate) {
        const { url, options } = PUT_MEMBRO(obj, id);
        const { response } = await request(url, options);
        if (response.ok) {
          fetchMusicos();
          clean();
          setVisible(false);
        }
        return;
      }

      const { url, options } = POST_MEMBRO(obj);
      const { response } = await request(url, options);
      if (response.ok) {
        fetchMusicos();
        clean();
        setVisible(false);
      }
    }
  }

  async function deleteMembro(id) {
    const { url, options } = DELETE_MEMBRO(id);
    const { response } = await request(url, options);
    if (response.ok) {
      fetchMusicos();
    }
  }

  async function updateMembro(membro) {
    setVisible(true);
    setNome(membro.nome);
    let funcao = getFuncao(membro.instrumento.toString());
    setFuncao(funcao);
    setId(membro.id);
    setIsUpdate(true);
  }

  return (
    <>
      <div className="flex-end mb">
        <div>
          <Button icon="pi pi-plus" onClick={() => setVisible(true)}></Button>

          <Dialog
            header="Novo membro"
            visible={visible}
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}
            className="modal"
          >
            <form onSubmit={handleSubmit}>
              <div className="flex flex-column gap-2 mb mt">
                <label htmlFor="nome">Nome</label>
                <InputText
                  id="nome"
                  value={nome}
                  aria-describedby="nome-help"
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
              <div className="mt">
                {isUpdate ? (
                  <Button label="Atualizar" icon="pi pi-check" autoFocus />
                ) : (
                  <Button label="Salvar" icon="pi pi-check" autoFocus />
                )}
              </div>
            </form>
          </Dialog>
        </div>
      </div>
      {musicos.map((musico) => (
        <div className="box mb">
          <div className="flex">
            <div>
              <h3>{musico.nome}</h3>

              <p>{getFuncoes(musico.instrumento)}</p>
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
      ))}
    </>
  );
};

export default Membros;
