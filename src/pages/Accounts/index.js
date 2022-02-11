import { FaPlusCircle } from 'react-icons/fa';
import AccountsCard from '../../components/AccountsCard';
import Logo from '../../components/Logo';

export default function Accounts({users, toggleAccount}) {
  
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
              {users.map((item, key) => (
                <AccountsCard
                  key={key}
                  link={item.link}
                  name={item.name}
                  icon={item.icon}
                  onClick={toggleAccount}
                />
              ))}
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