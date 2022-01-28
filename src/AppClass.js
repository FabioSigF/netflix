import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './layout/Home'
import Tmdb from "./Tmdb.js";
import './Styles/main.css'
import ManageProfile from "./layout/ManageProfile";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleWWChange = this.handleWindowWidthChange.bind(this);
    this.handleListChange = this.handleMovieListChange.bind(this);
    this.handleFeaturedChange = this.handleFeaturedDataChange.bind(this);
    this.state = {
      windowWidth: window.innerWidth,
      featureData: null,
      movieList: []
    }
  }

  handleWindowWidthChange(state){
    this.setState({windowWidth: state})
  }

  handleMovieListChange(state){
    this.setState({movieList: [...this.state.movieList, ...state]})
  }

  handleFeaturedDataChange(state){
    this.setState({featureData: state})
  }

  componentDidMount() {

    window.addEventListener('resize', this.handleWWChange(window.innerWidth));

    const loadAll = async () => {
      // Pegando a lista Total
      let list = await Tmdb.getHomeList();
      this.handleListChange(list);

      //Pegando o feature
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      this.handleFeaturedChange(chosenInfo);
    }

    loadAll();

  }
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ManageProfile />} />
          <Route path="/home" element={<Home windowWidth={this.state.windowWidth} movieList={this.state.movieList} featureData={this.state.featureData} />}
          />
        </Routes>

      </Router>
    );
  }
}
