import React from "react"
import VideoPlayer from "./VideoPlayer"
import VideoTitle from "./VideoTitle"
import { useSelector } from "react-redux"

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  const movie = movies ? movies[0] : null
console.log("in mainddd:", movie?.id)
const movieId =  encodeURIComponent(movie?.id);
  // console.log("key: ", key)
  console.log("in main idddd:", movieId)
  console.log(movie)
  return (
    <div>
      <VideoTitle
        title={movie?.original_title}
        overview={movie?.overview}
        rating={movie?.vote_average}
      />
       <VideoPlayer movieId={movieId} />
    </div>
  )
}

export default MainContainer
