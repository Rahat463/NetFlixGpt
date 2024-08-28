import { options } from "../utils/contants"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const usePopularMovies=()=>{
 // console.log("type= ",)
    const dispatch = useDispatch()
  const fetchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=1`,
      options
    ).catch((e)=>{console.log(e.message)})
    const json = await response?.json()
   if(json?.results) dispatch(addPopularMovies(json?.results))
   // console.log("jsonR", json)
  }
  useEffect(() => {
    fetchMovie()
  }, [])
}

export default usePopularMovies;