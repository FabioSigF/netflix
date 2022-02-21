import React, { useState, useEffect } from 'react';
import Container from '../../../auxiliar/Container';
export default function SearchPage({ searchChange, movieList, setMovieInfo }) {

  const [searchValue, setSearchValue] = useState("Lucifer");

  useEffect(() => {
    setSearchValue(searchChange)
  });

  function searchMovies() {
    let movies = []
    movieList.forEach((item) => {
      item.items.results.filter((value) => {
        if (searchValue === undefined) {
          return value
        } else if (value.name && (value.name.toLowerCase().includes(searchValue.toLowerCase()))) {
          return value

        } else if (value.title && (value.title.toLowerCase().includes(searchValue.toLowerCase()))) {
          return value
        }
      }).forEach((item) => {
        movies.push(item)
      })
    })
    return movies
  }

  return (
    <section className='searchPage'>
      <div className='searchPage__results--error'>
        <p>Não encontramos resultados para "{searchValue}".</p>
        <span>Sugestões:</span>
        <ul>
          <li>Tente palavras-chave diferentes</li>
          <li>Tente palavras-chave diferentes</li>
          <li>Tente palavras-chave diferentes</li>
        </ul>
      </div>
      <Container>
        <h2 className="searchPage__title">Procurar por: "{searchValue}"</h2>
        {searchValue &&
          <ul className='searchPage__results'>
            {searchMovies().map((item, key) => (
              <li key={key} className="myList__item" onClick={() => setMovieInfo(item)} >
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.name} className="myList__img" />
              </li>
            ))}
          </ul>
        }
      </Container>
    </section>
  )
}
