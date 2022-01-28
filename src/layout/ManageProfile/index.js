import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import InitialProfileCard from '../../components/InitialProfileCard';
import Logo from '../../components/Logo';
import './ManageProfile.css';


export default function ManageProfile() {

  return (
    <>
      <section className='m_profile'>
        <header className='m_profile__header'>
          <Logo />
        </header>
        <main className='m_profile__container'>
          <div className='m_profile__content'>
            <h2 className='m_profile__title'>Quem está assistindo?</h2>
            <ul className='m_profile__list'>
              <InitialProfileCard 
                link="/home"
                name="Fábio"
                bg="1"
              />
              <InitialProfileCard 
                link="/home"
                name="Felipe"
                bg="2"
              />
              <InitialProfileCard 
                link="/home"
                name="Silvana"
                bg="3"
              />
              <InitialProfileCard 
                link="/home"
                name="Isabella"
                bg="4"
              />
              <li className='m_profile__item'>
                <Link to="/home" className='m_profile__avatar prof--ad'>
                  <FaPlusCircle />
                </Link>
                <span className='m_profile__name'>Adicionar perfil</span>
              </li>
            </ul>
            <div className='m_profile__edit'>
              <a href="#!">Gerenciar perfis</a>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}