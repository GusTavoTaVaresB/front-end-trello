import React, { useState } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import { data } from "autoprefixer";


export default function Professor() {
  const [nome, setNome] = useState("")
  const [registration, setRegistration] = useState("")
  const [cpf, setCpf] = useState("")
  const [phone, setPhone] = useState("")
  const data = {
    name: nome,
    registration,
    cpf,
    phone,
  }
  axios.post("http://localhost:3333/users/teacher", data).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
  return (
    <>
      <h1>ola mundo</h1>
    </>
  );
}
