import React, {useState, useEffect} from 'react';
import FeatureMovie from "../../components/FeatureMovie";
import MovieRow from "../../components/MovieRow";
import Loading from "../../layout/Loading";
import Header from "../../layout/Header";
import MobileHeaderBottom from '../../layout/MobileHeader/MobileHeaderBottom';
import MyFooter from '../../layout/MyFooter';
export default function Home({ windowWidth, featureData, movieList, loggedUser, users }) {

  const [loading, setLoading] = useState(true);
  const [father, setFather] = useState('')
  useEffect(() => {
    const loadData = async () => {

      await new Promise((r) => setTimeout(r, 500));
      setLoading((loading) => !loading);
    };
    console.log(father)
    loadData();
  }, [])

    
  if (loading) {
      return <Loading />
  }

  else {
  return (
    <>
      <Header windowWidth={windowWidth} movieList={movieList} loggedUser={loggedUser} users={users}/>
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
            setProps={setFather}
          />
        ))}
      </section>
      <MyFooter />
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