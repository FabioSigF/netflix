import React from "react";
import { Link } from "react-router-dom";

export default function AccountsCard({link, name, bg, children, customClass}) {
  return (
    <li className='accountsCard__item'>
      <Link to={link} className={`accountsCard__avatar ${customClass}`} id={`user${bg}`}>
        {children}
      </Link>
      <span className='accountsCard__name'>{name}</span>
    </li>
  )
} 