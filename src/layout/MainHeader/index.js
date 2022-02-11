import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../components/Logo';
import imgUserApi from "../../imgs/users/imgUserApi";
import { FaSearch, FaBell, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useState } from "react/cjs/react.development";
export default function Header({ loggedUser, users }) {

  const [currentUser, setCurrentUser] = useState(loggedUser);

  function changeUser(item) {
    setCurrentUser(item)
  }

  function scrollBg() {
    const header = document.querySelector('.header');

    if (window.innerWidth > 1199 && window.scrollY > 30) {
      header.style.background = 'rgb(20,20,20)';
    } else if (window.innerWidth > 1199) {
      header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 30%, rgba(20,20,20,0))';
    }
  }
  window.addEventListener('scroll', scrollBg)

  return (
    <header className="header" data-menu>
      <nav className="menu">
        <Logo />
        <ul className="menu__list">
          <li className="menu__item">
            <a href="/" className="menu__link active">Início</a>
          </li>
          <li className="menu__item">
            <a href="/" className="menu__link">Séries</a>
          </li>
          <li className="menu__item">
            <a href="/" className="menu__link">Filmes</a>
          </li>
          <li className="menu__item">
            <a href="/" className="menu__link">Bombando</a>
          </li>
          <li className="menu__item">
            <a href="/" className="menu__link">Minha lista</a>
          </li>
        </ul>
      </nav>
      <div className="menu__user">
        <div className="menu__user__search">
          <FaSearch />
        </div>
        <div className="menu__user__kids">
          <a href="/">Infantil</a>
        </div>
        <div className="menu__user__notification">
          <FaBell />
        </div>
        <div className="menu__user__profile flex flex_ai_c">
          <a href="/" className="menu__user__icon">
            <img src={imgUserApi.users[currentUser]} alt="Netflix User" />
          </a>
          <div className="menu__user__profile_btn">
            <FaCaretDown />
          </div>
          <div className="menu__profile">
            <FaCaretUp className="menu__profile__caret" />
            <ul className="menu__profile__accounts">
              {users.map((item, key) => {
                if (item.icon !== currentUser) {
                  return (
                    <li className="menu__profile__account flex flex_ai_c" key={key} data-type={item.icon} onClick={()=>changeUser(item.icon)}>
                      <img src={imgUserApi.users[item.icon]} alt="" data-type={item.icon} className="menu__profile__account__img" />
                      <span className="menu__profile__account__name" data-type={item.icon}>{item.name}</span>
                    </li>
                  )
                }
              }
              )}
              <li className="menu__profile__accountManage">
                <button>Gerenciar perfis</button>
              </li>
            </ul>
            <ul className="menu__profile__manage">
              <li className="menu__profile__manage__item">
                <a href="#!" className="menu__profile__manage__link">Conta</a>
              </li>
              <li className="menu__profile__manage__item">
                <a href="#!" className="menu__profile__manage__link">Centro de ajuda</a>
              </li>
              <li className="menu__profile__manage__item">
                <Link to="/" className="menu__profile__manage__link">
                  Sair da Netflix
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}