import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { GET_MUSICOS, POST_MEMBRO } from "../Services/api";
import useFetch from "../Hooks/useFetch";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const Membros = () => {
  const { request } = useFetch();
  const [musicos, setMusicos] = useState([]);
  const [visible, setVisible] = useState(false);
  const [nome, setNome] = useState(null);
  const [funcao, setFuncao] = useState(null);

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

  function handleSubmit() {
    const token = window.localStorage.getItem("token");

    let obj = {
      id: 0,
      nome: nome,
      instrumento: parseInt(funcao.code),
    };

    console.log(obj);

    const { url, options } = POST_MEMBRO(obj);
    request(url, options);
  }

  return (
    <>
      <div className="flex-end mb">
        <div>
          <Button onClick={() => setVisible(true)}>Novo membro</Button>

          <Dialog
            header="Novo membro"
            visible={visible}
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}
            footer={
              <div className="mt">
                <Button
                  label="Limpar"
                  icon="pi pi-times"
                  onClick={() => setVisible(false)}
                  className="p-button-text"
                />
                <Button
                  label="Salvar"
                  icon="pi pi-check"
                  onClick={() => handleSubmit()}
                  autoFocus
                />
              </div>
            }
            className="modal"
          >
            <form>
              <div className="flex flex-column gap-2 mb mt">
                <label htmlFor="nome">Nome</label>
                <InputText
                  id="nome"
                  onChange={(e) => setNome(e.target.value)}
                  aria-describedby="nome-help"
                />
              </div>

              <div className="flex flex-column gap-2">
                <label>Função</label>
                <Dropdown
                  value={funcao}
                  onChange={(e) => setFuncao(e.value)}
                  options={funcoes}
                  optionLabel="name"
                  placeholder="Selecione a função"
                />
              </div>
            </form>
          </Dialog>
        </div>
      </div>
      {musicos.map((musico) => (
        <div className="box mb">
          {musico.nome} - {getFuncoes(musico.instrumento)}
        </div>
      ))}
    </>
  );
};

export default Membros;
