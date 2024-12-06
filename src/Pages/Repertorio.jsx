import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { GET_MUSICAS } from "../Services/api";
import useFetch from "../Hooks/useFetch";

const Repertorio = () => {
  const [musicas, setMusicas] = useState([]);
  const { request } = useFetch();

  useEffect(() => {
    async function fetchMusicas() {
      const { url, options } = GET_MUSICAS();
      const { json } = await request(url, options);
      setMusicas(json);
    }

    fetchMusicas();
  }, [request, setMusicas]);

  return (
    <>
      <div className="flex-end mb">
        <div>
          <Button>Nova música</Button>
        </div>
      </div>
      {musicas.map((musica) => (
        <div className="box mb">
          <p key={musica.id}>
            {musica.cantor} - {musica.nome} - {musica.tom}
          </p>
        </div>
      ))}
    </>
  );
};

export default Repertorio;
