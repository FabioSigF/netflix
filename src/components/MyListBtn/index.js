import React from "react";
import { FaPlus } from 'react-icons/fa';
export default function WatchBtn(item){
  return(
    <a className="myListBtn" href={`list/add/${item.id}`}><FaPlus /> Minha Lista</a>
  )
}