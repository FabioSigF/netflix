import React from "react";
import Logo from "../Logo";
import user from '../../imgs/user.png';
import { FaSearch, FaTv } from 'react-icons/fa';
import Categorias from "./Categorias";

export default function MobileHeader({ categorias }) {
  function scrollBg() {
    const menu = document.querySelector('[data-menu]');
    if (window.scrollY > 90) {
      menu.classList.add('mb_menu--fixed');
    } else {
      menu.classList.remove('mb_menu--fixed');
    }
  }

  window.addEventListener('scroll', scrollBg)
  return (
    <header className="mb_header flex flex_ai_c" data-header>
      <div className="mb_header__bar">
        <Logo />
        <div className="mb_header__icons flex flex_ai_c">
          <a href="/" className="mb_header__tv">
            <FaTv />
          </a>
          <a href="/" className="mb_header__search">
            <FaSearch />
          </a>
          <a href="/" className="mb_header__profile">
            <img src={user} alt="Netflix User" />
          </a>
        </div>
      </div>
      <nav className="mb_menu" data-menu>
        <ul className="mb_menu__list">
          <li className="mb_menu__item">
            <a href="/" className="mb_menu__link">Séries</a>
          </li>
          <li className="mb_menu__item">
            <a href="/" className="mb_menu__link">Filmes</a>
          </li>
          <Categorias
            lista={categorias.map((item) => (
              {
                nome: item.title,
                href: `/${item.slug}`
              }
            ))}
          />
        </ul>
      </nav>

    </header>
  )
}