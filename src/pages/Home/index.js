import React, { useState, useEffect } from 'react';
import Loading from "../../layout/Loading";
import Header from "../../layout/Header";
import MenuBottom from '../../layout/MenuBottom';
import MovieInfo from '../../components/MovieInfo';
import { Outlet } from 'react-router-dom';
export default function Home({ windowWidth, movieList, loggedUser, users, movieInfo, searchChange }) {

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
        <Header windowWidth={windowWidth} movieList={movieList} loggedUser={loggedUser} users={users} searchChange={searchChange} />

        <Outlet />

        {movieInfo &&
          <MovieInfo movie={movieInfo} />
        }
        {movieList.length <= 0 &&
          <Loading />
        }
        {windowWidth < 1200 &&
          <MenuBottom />
        }
      </>
    )
  }
}