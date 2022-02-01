import React from "react";
import Logo from '../Logo';
import user from '../../imgs/user.png';
import { FaSearch, FaBell } from 'react-icons/fa';
export default function Header() {

  function scrollBg() {
    const header = document.querySelector('.header');

    if (window.innerWidth > 1199 && window.scrollY > 30) {
      header.style.background = 'rgb(20,20,20)';
    } else if (window.innerWidth > 1199){
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
        <a href="/" className="menu__user__logo">
          <img src={user} alt="Netflix User" />
        </a>
      </div>
    </header>
  )
}