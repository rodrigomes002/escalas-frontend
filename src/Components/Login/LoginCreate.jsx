import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
    </section>
  );
};

export default LoginCreate;
