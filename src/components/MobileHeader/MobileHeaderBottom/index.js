import React from "react";
import { FaHome, FaGamepad, FaPlaneArrival, FaSmileBeam, FaArrowAltCircleDown } from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function MobileHeaderBottom() {

  const menuItemsData = [
    { name: 'Início', icon: <FaHome className="mhb__icon" />, href: '/home', id: 'mhb_item_1' },
    { name: 'Jogos', icon: <FaGamepad className="mhb__icon" />, href: '/home', id: 'mhb_item_2' },
    { name: 'Em breve', icon: <FaPlaneArrival className="mhb__icon" />, href: '/home', id: 'mhb_item_3' },
    { name: 'Risadas', icon: <FaSmileBeam className="mhb__icon" />, href: '/home', id: 'mhb_item_4' },
    { name: 'Download', icon: <FaArrowAltCircleDown className="mhb__icon" />, href: '/home', id: 'mhb_item_5' },
  ]

  
  function linkAtivo(e, id) {
    const menuItems = document.querySelectorAll('.mhb__item');
    menuItems.forEach((item) => (
      item.classList.remove('active')
    ))
    e.preventDefault()
    document.querySelector(`#${id}`).classList.add('active')
  }

  return (
    <div className="mhb__container flex flex_ai_c ">
      <ul className="mhb__items flex flex_ai_c flex_jc_sb">
        {
          menuItemsData.map((item, key) => (
            <li className={`mhb__item ${item.name === 'Início' && 'active'}`} id={item.id} onClick={(e)=>linkAtivo(e,item.id)} key={key}>
              <Link to={item.href} className="mhb__link flex ">
                {item.icon}
                <span className="mhb__title">{item.name}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}