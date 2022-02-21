import MenuMobile from "../../layout/MenuMobile";
import Menu from "../Menu";

export default function Header({windowWidth, movieList, loggedUser, users, searchChange}){
  return(
    <>
      {windowWidth < 1024 ? 
      <MenuMobile categories={movieList} /> 
      : <Menu 
          loggedUser={loggedUser} users={users}
          menuList={true}
          menuUser={true}
          searchChange={searchChange}
      />}
    </>
  )
}