import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../components/Logo';
import imgUserApi from "../../imgs/users/imgUserApi";
import { FaBell, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useState } from "react/cjs/react.development";
import myList from '../../dataBase/clients.json';
import MenuList from "../../components/MenuList";
import Search from "../../components/Search";

export default function Menu({ loggedUser, users, menuList, menuUser, searchChange}) {

  const [currentUser, setCurrentUser] = useState(loggedUser);
  function changeUser(item) {
    setCurrentUser(item)
  }

  function scrollBg() {
    const header = document.querySelector('.header');

    if (window.innerWidth > 1023 && window.scrollY > 30) {
      header.style.background = 'rgb(20,20,20)';
    } else if (window.innerWidth > 1023) {
      header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 30%, rgba(20,20,20,0))';
    }
  }
  window.addEventListener('scroll', scrollBg)

  const dataMenu = [
    {title: "Início", link: "/home"},
    {title: "Séries", link: "/home/series"},
    {title: "Filmes", link: "/home/movies"},
    {title: "Bombando", link: "/home/latest"},
    {title: "Minha Lista", link: "/home/my-list"},
  ]


  return (
    <header className="header" data-menu>
      <nav className="menu">
        <Logo />
        {menuList &&
        <ul className="menu__list">
          <MenuList data={dataMenu}/>
        </ul>
        }
      </nav>
      {menuUser &&
      <div className="menu__user">
        <Search searchChange={searchChange} />
        <div className="menu__kids">
          <a href="/home">Infantil</a>
        </div>
        <div className="menu__notification">
          <FaBell />
          {myList.myFavorites.length > 0 &&
            <div className="menu__notification__alert flex flex_ai_c">{myList.myFavorites.length}</div>
          }
          <ul className="menu__notification__card">
            {myList.myFavorites.map((item, key) => (
              <li className="menu__notification__item" key={key}>
                <a href="/home/my-list" className="menu__notification__link flex flex_ai_c">
                  <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.name} className="menu__notification__img" />
                  <div className="menu__notification__text">
                    <span className="menu__notification__about">Assista agora</span>
                    <span className="menu__notification__title">{item.name}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu__user__profile flex flex_ai_c">
          <a href="/home" className="menu__user__icon">
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
                    <li className="menu__profile__account flex flex_ai_c" key={key} data-type={item.icon} onClick={() => changeUser(item.icon)}>
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
                <a href="/home" className="menu__profile__manage__link">Conta</a>
              </li>
              <li className="menu__profile__manage__item">
                <a href="/home" className="menu__profile__manage__link">Centro de ajuda</a>
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
      }
    </header>
  )
}