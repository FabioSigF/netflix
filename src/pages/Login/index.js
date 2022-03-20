import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../auxiliar/Container";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import InputForm from "../../components/InputForm";

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [clients, setClients] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:5000/clients`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setClients(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function handleEmailChange(e) {
    var inputEmail = e.target.value;
    setEmail(inputEmail);
  }
  function handleSenhaChange(e) {
    var inputSenha = e.target.value;
    setSenha(inputSenha);
  }

  const errorMessages = {
    missingData: "Você não preencheu todos os campos. Tente novamente!",
    emailNotFound: "Desculpe, não encontramos uma conta com esse endereço de email. Tente novamente ou <a href='#'>crie um nova conta.</a>",
    wrongPassword: `<strong>Senha incorreta</strong>. Tente novamente!`
  }

  function authClient(email, password) {
    const itemError = document.querySelector('.login__error')
    clients.forEach(item => {
      if ((item.email === email) && (item.password === password)) {
        itemError.classList.remove('error')
        return navigate("/accounts")
      }
      if ((email === '') || (password === '')) {
        itemError.classList.add('error')
        itemError.innerHTML = `${errorMessages.missingData}`
      }
      if ((item.email !== email) && (email !== '')) {
        itemError.classList.add('error')
        itemError.innerHTML = `${errorMessages.emailNotFound}` 
      }
      if ((item.email === email) && (item.password !== password)) {
        itemError.classList.add('error')
        itemError.innerHTML = `${errorMessages.wrongPassword}`
      }
    })
  }

  return (
    <>
      <header className="login__header">

        <Container customClass={'login__header__container'}>
          <div className="login__logo">
            <Logo />
          </div>
        </Container>

      </header>
      
      <main>
        <div className="login__bg">
          <div className="login__form">
            <Form title="Entrar" onClick={() => authClient(email, senha)}>
              <div className="login__errors">
                <span className="login__error"></span>
              </div>
              <div className="login__inputs">
                <InputForm
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <InputForm
                  type="password"
                  name="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={handleSenhaChange}
                />
              </div>
            </Form>
          </div>
        </div>
      </main>
    </>
  )
}