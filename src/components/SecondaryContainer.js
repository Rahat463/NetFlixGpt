import React from "react"
import { useSelector } from "react-redux"
import MovieList from "./MovieList"
function SecondaryContainer() {
  const movies = useSelector((store) => store.movies)
  //console.log(movies)

  return (
    <div className="  bg-black">
      {movies && (
        <div className="relative -mt-56">
         
            <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
            <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
          
        </div>
      )}
    </div>
  )
}

export default SecondaryContainer
