import React from "react";
import FeatureMovie from "../../../components/FeatureMovie";
import MovieRow from "../../../components/MovieRow";

export default function Browse({ featureData, movieList, openMoreInfo }) {
  return (
    <>
      {featureData &&
        <FeatureMovie
          item={featureData}
        />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
            onClickItem={openMoreInfo}
          />
        ))}
      </section>
    </>
  )
}