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
  //console.log("in main idddd:", movieId)
  //console.log(movie)
  return (
    <div className=" sm:p-8">
  <div className="mb-4">
    <VideoTitle
      title={movie?.original_title}
      overview={movie?.overview}
      rating={movie?.vote_average}
    />
  </div>
  <div className="aspect-w-16 aspect-h-9 w-full bg-black rounded-lg overflow-hidden">
    <VideoPlayer movieId={movieId} />
  </div>
</div>

  )
}

export default MainContainer
