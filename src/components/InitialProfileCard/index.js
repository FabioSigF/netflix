import { Link } from "react-router-dom";
import './InitialProfileCard.css'
export default function InitialProfileCard({link, name, bg}) {
  return (
    <li className='initial_profile__item'>
      <Link to={link} className='initial_profile__avatar' id={`user${bg}`} />
      <span className='initial_profile__name'>{name}</span>
    </li>
  )
} 