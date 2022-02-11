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


export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [featureData, setFeatureData] = useState(null);
  const [movieList, setMovieList] = useState([]);

  //Função para captar o tamanho da tela e enviar ao state
  function handleResize() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    const loadAll = async () => {
      // Pegando a lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(movieList)

      //Pegando o feature
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo);
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

  return (
    <Router>

      <Routes>

        <Route index path="/" element={<Initial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/accounts"
          element={<Accounts users={users} toggleAccount={toggleAccount} />}
        />
        <Route path="/home"
          element={
            <Home
              windowWidth={windowWidth}
              movieList={movieList}
              featureData={featureData}
              loggedUser={loggedUser}
              users={users}
            />}
        />
        <Route path="new-client" element={<NewClient />}>
          <Route index element={<ConfigCard />}/>
          <Route path="config" element={<ConfigCard />}/>
          <Route path="password" element={<CreatePassword />}/>
          <Route path="congrat" element={<Congratulations />}/>
        </Route>
      </Routes>

    </Router>
  );
}
