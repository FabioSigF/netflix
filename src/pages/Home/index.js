import React, {useState, useEffect} from 'react';
import FeatureMovie from "../../components/FeatureMovie";
import MovieRow from "../../components/MovieRow";
import Loading from "../../components/Loading";
import Header from "../../layout/Header";
import MobileHeaderBottom from '../../components/MobileHeader/MobileHeaderBottom';
export default function Home({ windowWidth, featureData, movieList }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {

      await new Promise((r) => setTimeout(r, 500));
      setLoading((loading) => !loading);
    };
      
    loadData();
  }, [])
    
  if (loading) {
      return <Loading />
  }

  else {
  return (
    <>
      <Header windowWidth={windowWidth} movieList={movieList}/>
      {featureData &&
        <FeatureMovie
          item={featureData}
          windowWidth={windowWidth}
        />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
          />
        ))}
      </section>
      <footer className="footer">
        <p>Feito com dedicação por Fábio Signorini</p>
        <p>Direitos de imagem para Netflix</p>
        <p>Dados utilizados do site Themoviedb.org</p>
      </footer>

      {movieList.length <= 0 &&
        <Loading />
      }
      {windowWidth < 1200 &&
        <MobileHeaderBottom/>
      }
    </>
  )
}
}