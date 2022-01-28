import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './layout/Home'
import Tmdb from "./Tmdb.js";
import './Styles/main.css'
import ManageProfile from "./layout/ManageProfile";
export default function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [featureData, setFeatureData] = useState(null);
  const [movieList, setMovieList] = useState([]);

  function handleResize() {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => { 
    window.addEventListener('resize', handleResize);
    
    const loadAll = async () => {
      // Pegando a lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
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

return (
  <Router>
    <Routes>
      <Route path="/" element={<ManageProfile />} />
      <Route path="/home" element={<Home windowWidth={windowWidth} movieList={movieList} featureData={featureData}/>}
      />
    </Routes>

  </Router>
);
}
