import MobileHeader from "../../components/MobileHeader";
import MainHeader from "../../components/MainHeader";

export default function Header({windowWidth, movieList}){
  return(
    <>
      {windowWidth < 1200 ? <MobileHeader categorias={movieList} /> : <MainHeader />}
    </>
  )
}