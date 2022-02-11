import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';

export default function Form({ title, children, onClick }) {


  return (
    <div className="form">
      <h2 className="form__title">{title}</h2>
      <form action="" className="form__container">
        {children}
        <div className="form__btn">
          <button type="button" className="linkBtn linkBtn--main" onClick={onClick}>{title}</button>
        </div>
      </form>
      {title === 'Entrar' &&
        <>
          <div className="form__help flex flex_ai_c flex_jc_sb">
            <div className="form__rememberMe flex flex_ai_c">
              <input type="checkbox" name="remeber_me" defaultChecked />
              <label htmlFor="">Lembre-se de mim</label>
            </div>
            <div className="form__helpMe">
              <a href="#!">Precisa de ajuda?</a>
            </div>
          </div>
          <div className="form__other">
            <a href="#!" className="form__social flex flex_ai_c">
              <FaFacebookF className="form__social__icon" />
              <span>Conectar com Facebook</span>
            </a>
            <div className="form__subscribe">
              <span>Novo por aqui? <Link to="/new-client">Assine agora!</Link></span>
            </div>
            <div className="form__reCaptcha">
              <span>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#!">Saiba mais.</a></span>
            </div>
          </div>
        </>
      }
    </div>
  )
}