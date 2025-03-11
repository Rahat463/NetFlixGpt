import React from "react"
import { useParams } from "react-router-dom"
//import useSpecificMovieTrailer from '../hooks/useSpecificMovieTrailer'
import TrailerHeader from "./TrailerHeader"
import VideoPlayer from "./VideoPlayer"
import Header from "./Header"
function MovieTrailer() {
  const { movieId } = useParams()
 // console.log("movieId: ", movieId)
  // useMoviesVideos(resId)
  // const trailer=useSelector(store=>store?.movies?.trailer)
  return (
    <div className=" sm:p-8">
     <TrailerHeader/>
      <VideoPlayer movieId={movieId} />
    </div>
  )
}

export default MovieTrailer
