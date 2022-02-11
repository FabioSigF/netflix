import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../../components/InputForm";
import LinkBtn from "../../../components/LinkBtn";
import Button from "../../../components/Button";

export default function CreatePassword() {

  const initialInputValues = {
    email: '',
    password: ''
  }
  const [inputValues, setInputValues] = useState(initialInputValues)

  function handleChange(e) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  function createNewClient(email, password){
    return fetch(`http://localhost:5000/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(navigate("/new-client/congrat"))
  }

  return (
    <div className="newClient__card flex flex_ai_c">
      <span className="newClient__step">Passo <strong>2</strong> de <strong>3</strong></span>
      <h2 className="newClient__title">Crie uma senha para começar sua conta</h2>
      <div className="newClient__text">
        <span>Apenas mais alguns passos e finalizamos!</span>
        <span>Nós também odiamos papelada.</span>
      </div>
      <form className="newClient__form" onSubmit={() => createNewClient(inputValues.email, inputValues.password)}>
        <InputForm
          type="email"
          name="email"
          placeholder="Email"
          value={inputValues.email}
          onChange={handleChange}
        />
        <InputForm
          type="password"
          name="password"
          placeholder="Senha"
          value={inputValues.password}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%^_=+-]).{6,12}$"
          onChange={handleChange}
        />
        <div className="newClient__btn">
          <Button title="Next" type="submit" />
        </div>
      </form>
    </div>
  )
}