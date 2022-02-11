import React from "react";
import imgUserApi from "../../imgs/users/imgUserApi";
import { Link } from "react-router-dom";

export default function AccountsCard({link, name, icon, children, customClass, onClick}) {
  return (
    <li className='accountsCard__item'>
      <Link 
        to={link} 
        className={`accountsCard__avatar ${customClass}`}
        id={icon}
        style={{backgroundImage: `url(${imgUserApi.users[icon]})`}}
        onClick={onClick}
      >
        {children}
      </Link>
      <span className='accountsCard__name'>{name}</span>
    </li>
  )
} 