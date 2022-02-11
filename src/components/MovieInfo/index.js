import React, { useState } from "react";
import { FaCheck, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { BiX } from 'react-icons/bi'
import WatchBtn from "../WatchBtn";

export default function MovieInfo({ movie }) {
  let firstDate = new Date(movie.first_air_date);
  let releaseDate = new Date(movie.release_date);
  function closeMovieInfo(){
    const moreInfo = document.querySelector('.movieInfo')
    moreInfo.classList.remove('open')
  }

  return (
    <div className="movieInfo open">
      <article className="movieInfo__container">
        <div className="movieInfo__preview flex" style={{
          backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
          <div className="movieInfo__preview__panel">
            <h2 className="movieInfo__title">{movie.original_title}{movie.name}</h2>
            <div className="movieInfo__btns flex">
              <WatchBtn />
              <div className="movieInfo__btn flex">
                <FaCheck />
              </div>
              <div className="movieInfo__btn flex">
                <FaThumbsUp />
              </div>
              <div className="movieInfo__btn flex">
                <FaThumbsDown />
              </div>
            </div>
          </div>
        </div>
        <div className="movieInfo__close flex" onClick={closeMovieInfo}>
          <BiX />
        </div>
        <div className="movieInfo__about">
          <div className="movieInfo__content">
            <div className="movieInfo__bar">
              <span className="movieInfo__points">{movie.vote_average} pontos</span>
              <span className="movieInfo__date">
                {movie.first_air_date ? firstDate.getFullYear() : releaseDate.getFullYear()}
                </span>
            </div>
            <p className="movieInfo__description">
              {movie.overview}
            </p>
          </div>
        </div>
      </article >
    </div>
  )
}