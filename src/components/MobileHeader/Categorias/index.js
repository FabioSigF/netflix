import { useState } from 'react';
import './Categorias.css'
export default function Categorias({ lista }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const item = document.querySelectorAll('.categorias__link[id]');
  const container = document.querySelector('.categorias_container');
  
  function linkAtivo(e, id) {
    item.forEach(item => {
      item.classList.remove('active')
    })
    e.preventDefault()
    item[id + 1].classList.add('active')
  }

  function toggleMenu() {
    if (menuOpen !== true) {
      container.classList.add('open');
      setMenuOpen(true);
    } else if (menuOpen === true) {
      container.classList.remove('open');
      setMenuOpen(false);
    }
  }

  return (
    <>
      <li className="mb_menu__item">
        <button type="button" className="mb_menu__link" onClick={toggleMenu}>Categorias</button>
      </li>
      <div className="categorias_container flex flex_ai_c">
        <ul className="categorias__lista flex flex_ai_c" data-lista>
          <li className="categorias__item">
            <a href="/" className='categorias__link active' id='0'>Início</a>
          </li>
          {lista.map((item, id) => (
            <li className="categorias__item" key={id}>
              <a href={item.href} className="categorias__link" id={id + 1} onClick={(e) => linkAtivo(e, id)}>{item.nome}</a>
            </li>
          ))}
        </ul>
        <div className='categorias__close flex' onClick={toggleMenu}>
          <span></span>
        </div>
      </div>
    </>
  )
}