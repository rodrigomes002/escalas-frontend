import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Error from "../Components/Helper/Error";
import { Button } from "primereact/button";
import { GET_MUSICOS, POST_MEMBRO } from "../Services/api";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const Membros = () => {
  const [error, setError] = useState(null);
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState("");

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

  useEffect(() => {
    async function fetchMusicos() {
      const { url, options } = GET_MUSICOS();
      const { json } = await request(url, options);
      setMusicos(json);
    }

    fetchMusicos();
  }, [request, setMusicos]);

  function validate(value) {
    if (value.length === 0) {
      setError("Preencha o valor.");
      return;
    }

    setError(null);
  }

  function clean() {
    setNome("");
    setFuncao(null);
    setError(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem("token");

    let obj = {
      id: 0,
      nome: nome,
      instrumento: parseInt(funcao.code),
    };

    validate(nome);
    validate(funcao);

    const { url, options } = POST_MEMBRO(obj);
    const { response } = await request(url, options);
    if (response.ok) {
      clean();
      setVisible(false);
    }
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
                <Button
                  label="Limpar"
                  icon="pi pi-times"
                  className="p-button-text"
                  onClick={clean}
                />
                <Button label="Salvar" icon="pi pi-check" autoFocus />
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
                onClick={() => setVisible(false)}
                className="p-button-text"
              />
              <Button
                icon="pi pi-trash"
                onClick={() => setVisible(false)}
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
