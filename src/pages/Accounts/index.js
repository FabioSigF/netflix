import { FaPlusCircle } from 'react-icons/fa';
import AccountsCard from '../../components/AccountsCard';
import Logo from '../../components/Logo';


export default function ManageProfile() {

  return (
    <>
      <section className='accounts'>
        <header className='accounts__header'>
          <Logo />
        </header>
        <main className='accounts__container'>
          <div className='accounts__content'>
            <h2 className='accounts__title'>Quem está assistindo?</h2>
            <ul className='accounts__list'>
              <AccountsCard 
                link="/home"
                name="Fábio"
                bg="1"
              />
              <AccountsCard 
                link="/home"
                name="Felipe"
                bg="2"
              />
              <AccountsCard 
                link="/home"
                name="Silvana"
                bg="3"
              />
              <AccountsCard 
                link="/home"
                name="Isabella"
                bg="4"
              />
              <AccountsCard 
                link="/home"
                name="Adicionar perfil"
                bg="5"
                customClass='prof--ad'
              >
                <FaPlusCircle />
              </AccountsCard>
            </ul>
            <div className='accounts__edit'>
              <a href="#!">Gerenciar perfis</a>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}