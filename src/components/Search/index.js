import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export default function Search({searchChange}) {

  const [openMenu, setOpenMenu] = useState(false)
  const [searchValue, setSeachValue] = useState('')
  const navigate = useNavigate()

  function handleSearchChange(e){
    const valor = e.target.value;
    searchChange(valor)
    setSeachValue(valor)
    if(valor.length >= 0){
      navigate("search")
    } 
    if (valor.length <= 0){
      navigate("/home/browse")
    }
  }

  function toggleMenu() {
    const search = document.querySelector('[data-search]');
    if (openMenu === false) {
      setOpenMenu(!openMenu)
      search.classList.add('open')
      document.addEventListener("mousedown", clickOutside)
    } else {
      search.classList.remove('open')
      setOpenMenu(!openMenu)
      document.removeEventListener("mousedown", clickOutside)
    }
    
  }

  function clickOutside(e){
    const search = document.querySelector('[data-search]');
    if (!search.contains(e.target)) {
      search.classList.remove('open')
      setOpenMenu(false)
    }
  }
  return (
    <div className="search" data-search>
      {!openMenu
        ?
        (<button className='search__btn' onClick={toggleMenu}>
          <FaSearch />
        </button>)
        :
        (<div className='search__bar' onClick={clickOutside}>
          <button className='search__bar__icon' onClick={toggleMenu} >
            <FaSearch />
          </button>
          <input type="text" className='search__bar__input' placeholder='Título, gênero' onChange={handleSearchChange} value={searchValue} name="search"/>
        </div>)
      }
    </div>
  )
}
