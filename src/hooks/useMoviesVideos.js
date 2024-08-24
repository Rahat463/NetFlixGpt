import React, { useEffect } from "react"
import { options } from "../utils/contants"
import { useDispatch } from "react-redux"
import { addTrailer } from "../utils/moviesSlice"

function useMoviesVideos(movieId) {
  const dispatch = useDispatch()
  const link="https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US"
  console.log("props:", movieId)
  console.log("link:",link)
  const fetchMovieVideos = async () => {
    const response = await fetch(
      link,
      options
    )
    const json = await response?.json()
    console.log("useMovie: ",json)
    
    if(json?.results)  {const filterMovies = json?.results?.filter(
        (video) => video.type === "Trailer"
      )
     // console.log("filter", filterMovies, "\n results: ", json?.results)
      const trailer = filterMovies ? filterMovies[0] : json?.results[0]

      dispatch(addTrailer(trailer))
    }
  }

  useEffect(() => {
    console.log("in id: ",movieId)
    fetchMovieVideos()
  }, [movieId])
}

export default useMoviesVideos
