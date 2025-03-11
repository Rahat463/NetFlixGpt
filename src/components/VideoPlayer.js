import React from "react"
import useMoviesVideos from "../hooks/useMoviesVideos"
import { useSelector } from "react-redux"
function VideoPlayer({ movieId }) {
  //console.log("id::", movieId)
  useMoviesVideos(movieId)
  const trailer = useSelector((store) => store.movies?.trailer)
  //console.log("trailer", trailer)
  //console.log("key== ", trailer?.key)
  //const link = `https://www.youtube.com/embed/${trailer?.key}`
  return (
    <div className=" bg-black w-screen  sm:p-8 ">
      <iframe
        src={
          "https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"
        }
        className="w-screen aspect-video"
        title="YouTube video player"
        frameBorder="0" // `frameborder` should be camelCased as `frameBorder`
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" // `referrerpolicy` should be camelCased as `referrerPolicy`
        allowFullScreen // `allowfullscreen` should be camelCased as `allowFullScreen`
      ></iframe>
    </div>
  )
}

export default VideoPlayer
