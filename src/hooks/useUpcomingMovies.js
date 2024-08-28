import { options } from "../utils/contants"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useUpcomingMovies=()=>{
  //console.log("type= ",)
    const dispatch = useDispatch()
  const fetchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?page=1`,
      options
    ).catch((e)=>{console.log(e.message)})
    const json = await response?.json()
   if(json?.results) dispatch(addUpcomingMovies(json?.results))
    //console.log("jsonR", json)
  }
  useEffect(() => {
    fetchMovie()
  }, [])
}

export default useUpcomingMovies;