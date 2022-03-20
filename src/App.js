import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Home from './pages/Home'
import Tmdb from "./Tmdb.js";
import Accounts from "./pages/Accounts";
import Initial from "./pages/Initial";
import Login from "./pages/Login";
import NewClient from "./pages/NewClient";
import CreatePassword from "./pages/NewClient/CreatePassword";
import ConfigCard from "./pages/NewClient/ConfigCard";
import Congratulations from "./pages/NewClient/Congratulations";
import MyList from "./pages/Home/MyList";
import Browse from "./pages/Home/Browse";
import Footer from "./layout/Footer";
import SearchPage from "./pages/Home/SearchPage";


export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //home
  const [featureData, setFeatureData] = useState(null);
  const [movieList, setMovieList] = useState([]);
  //serie
  const [featureSerieData, setFeatureSerieData] = useState(null);
  const [seriesList, setSeriesList] = useState([]);
  //filme
  const [featureMovieData, setFeatureMovieData] = useState(null);
  const [moviesList, setMoviesList] = useState([]);
  //kids
  const [featureKidsData, setFeatureKidsData] = useState(null);
  const [kidsMoviesList, setKidsMoviesList] = useState([]);
  //latest
  const [latestList, setLatestList] = useState([]);

  const [allList, setAllList] = useState([]);

  const [searchChange, setSearchChange] = useState();

  //Função para captar o tamanho da tela e enviar ao state
  function handleResize() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    const loadAll = async () => {
      // Pegando a lista principal
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o feature
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo);

      //Pegando lista de séries
      let serieList = await Tmdb.getSeriesList();
      setSeriesList(serieList)

      //Pegando o feature de séries
      let actionSeries = serieList.filter(i => i.slug === 'action');
      let randomChosenSeries = Math.floor(Math.random() * (actionSeries[0].items.results.length - 1));
      console.log(actionSeries[0].items.results)
      let chosenSeries = actionSeries[0].items.results[randomChosenSeries];
      let chosenInfoSeries = await Tmdb.getMovieInfo(chosenSeries.id, 'tv')
      setFeatureSerieData(chosenInfoSeries);

      //Pegando lista de filmes
      let moviesList = await Tmdb.getMoviesList();
      setMoviesList(moviesList)

      //Pegando o feature de filmes
      let actionMovies = moviesList.filter(i => i.slug === 'action');
      let randomChosenMovies = Math.floor(Math.random() * (actionMovies[0].items.results.length - 1));
      console.log(actionMovies[0].items.results)
      let chosenMovies = actionMovies[0].items.results[randomChosenMovies];
      let chosenInfoMovies = await Tmdb.getMovieInfo(chosenMovies.id, 'movie')
      setFeatureMovieData(chosenInfoMovies);

      //Pegando lista de filmes populares
      let latestList = await Tmdb.getLatestList();
      setLatestList(latestList)

      //Pegando lista de filmes
      let allMovieList = await Tmdb.getAllList();
      setAllList(allMovieList)

      //Pegando lista infantil
      let kidsList = await Tmdb.getKidsList();
      setKidsMoviesList(kidsList)

      //Pegando o feature infantil
      let kidsMovies = kidsList.filter(i => i.slug === 'family');
      let randomChosenKids = Math.floor(Math.random() * (kidsMovies[0].items.results.length - 1));
      console.log(kidsMovies[0].items.results)
      let chosenKids = kidsMovies[0].items.results[randomChosenKids];
      let chosenInfoKids = await Tmdb.getMovieInfo(chosenKids.id, 'movie')
      setFeatureKidsData(chosenInfoKids);
    }

    loadAll();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const users = [
    { name: 'Fábio', icon: 'user1', link: '/home' },
    { name: 'Felipe', icon: 'user4', link: '/home' },
    { name: 'Silvana', icon: 'user9', link: '/home' },
    { name: 'Isabella', icon: 'user7', link: '/home' },
  ]

  const [loggedUser, setLoggedUser] = useState('user1')

  function toggleAccount(e) {
    const imgAccount = e.target.id;
    imgAccount.length > 0 && setLoggedUser(imgAccount)
  }

  const [movieInfo, setMovieInfo] = useState('')
  function openMoreInfo(item) {
    setMovieInfo(item)
    const movieInfo = document.querySelector('.movieInfo')
    movieInfo.classList.add('open')
  }

  return (
    <Router>

      <Routes>

        <Route index path="/" element={<Initial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/accounts"
          element={<Accounts users={users} toggleAccount={toggleAccount} />}
        />
        <Route path="home"
          element={
            <Home
              windowWidth={windowWidth}
              movieList={movieList}
              movieInfo={movieInfo}
              loggedUser={loggedUser}
              users={users}
              searchChange={setSearchChange}
            />}
        >
          <Route index path="browse" element={<Browse
            featureData={featureData}
            windowWidth={windowWidth}
            movieList={movieList}
            openMoreInfo={openMoreInfo}
          />} />
          <Route path="series" element={<Browse 
            title={"Séries"}
            featureData={featureSerieData}
            windowWidth={windowWidth}
            movieList={seriesList}
            openMoreInfo={openMoreInfo}
            />} />
          <Route path="movies" element={<Browse 
            title={"Filmes"}
            featureData={featureMovieData}
            windowWidth={windowWidth}
            movieList={moviesList}
            openMoreInfo={openMoreInfo}
            />} />
          <Route path="latest" element={<Browse 
            windowWidth={windowWidth}
            movieList={latestList}
            openMoreInfo={openMoreInfo}
            />} />
          <Route path="kids" element={<Browse 
            title={"Infantil"}
            featureData={featureKidsData}
            windowWidth={windowWidth}
            movieList={kidsMoviesList}
            openMoreInfo={openMoreInfo}
            />} />
          <Route path="my-list" element={<MyList setMovieInfo={openMoreInfo} />} />
          <Route path="search" element={<SearchPage movieList={allList} searchChange={searchChange} setMovieInfo={openMoreInfo} />} />
        </Route>
        <Route path="new-client" element={<NewClient />}>
          <Route index element={<ConfigCard />} />
          <Route path="config" element={<ConfigCard />} />
          <Route path="password" element={<CreatePassword />} />
          <Route path="congrat" element={<Congratulations />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
