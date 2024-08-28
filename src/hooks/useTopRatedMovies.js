import { options } from "../utils/contants"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useTopRatedMovies=()=>{
  //console.log("type= ",)
    const dispatch = useDispatch()
  const fetchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?page=1`,
      options
    ).catch((e)=>{console.log(e.message)})
    const json = await response?.json()
   if(json?.results) dispatch(addTopRatedMovies(json?.results))
   // console.log("jsonR", json)
  }
  useEffect(() => {
    fetchMovie()
  }, [])
}

export default useTopRatedMovies;