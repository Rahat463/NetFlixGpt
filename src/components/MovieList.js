import React from "react"
import MovieCard from "./MovieCard"
import { Link } from "react-router-dom"

function MovieList({ title, movies }) {
  //console.log("movies: ", movies)
  return (
    <div className=" sm:p-8">
      <h1 className="text-xl p-1 font-bold mt-2 text-white bg-gradient-to-r from-black">{title}</h1>
      <div className="flex  overflow-x-scroll">
        {movies && (
          <div className="flex  ">
            {movies.map((movie) => (
              <Link
              to={`/browse/${movie?.id}`}
              key={movie?.id}
            >
              <MovieCard
                poster_path={movie?.poster_path}
                original_title={movie?.original_title}
                release_date={movie?.release_date}
               
              />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieList
