import React from "react";
import { FaPlay, FaPlus } from 'react-icons/fa';
export default function FeatureMovie({ item, windowWidth }) {

  //Seleciona gêneros dos filmes
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  //Limite de 200 caracteres para descrição do filme
  let description = item.overview;
  if(description.length > 200){
    description = description.substring(0, 200)  + '...';
  }

  return (
    <section className="featured" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured__content flex">
        <h2 className="featured__title">{item.original_name}</h2>

        {windowWidth >= 1200 &&
          <div className="featured__info">
            <div className="featured__points">{item.vote_average} pontos</div>
            <div className="featured__year">{firstDate.getFullYear()}</div>
            <div className="featured__seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 && 's'}</div>
            <div className="featured__synopsis">
              {description}
            </div>
            <div className="featured__btns">
              <a className="watch_btn" href={`watch/${item.id}`}><FaPlay />Assistir</a>
              <a className="mylist_btn" href={`list/add/${item.id}`}><FaPlus /> Minha Lista</a>
            </div>
            <div className="featured__genres">
              <strong>Gêneros: </strong>
              {genres.join(', ')}
            </div>
          </div>
        }

        {windowWidth < 1200 &&
          <div className="featured__info_mb">
            <div className="featured__genres">
              {genres.map((item, key)=>(
                <span key={key}>{item}</span>
              ))}
            </div>
            <div className="featured__btns">
              <a className="watch_btn" href={`watch/${item.id}`}><FaPlay />Assistir</a>
              <a className="mylist_btn" href={`list/add/${item.id}`}><FaPlus /> Minha Lista</a>
            </div>
          </div>
        }
      </div>
    </section>
  )
}