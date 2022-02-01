import MobileHeader from "../../layout/MobileHeader";
import MainHeader from "../../layout/MainHeader";

export default function Header({windowWidth, movieList}){
  return(
    <>
      {windowWidth < 1200 ? <MobileHeader categorias={movieList} /> : <MainHeader />}
    </>
  )
}