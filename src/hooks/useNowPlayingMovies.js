import { options } from "../utils/contants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch()
  const fetchMovie = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      options
    )
    const json = await response?.json()
   if(json?.results) dispatch(addNowPlayingMovies(json?.results))
    console.log("jsonR", json)
  }
  useEffect(() => {
    fetchMovie()
  }, [])
}

export default useNowPlayingMovies;