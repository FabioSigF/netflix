import netflixLoading from '../../../src/imgs/netflix-loading.gif';
import './Loading.scss'
export default function Loading() {
  return (
    <div className="loading">
      <img src={netflixLoading} alt="Carregando.." />
    </div>
  )
}