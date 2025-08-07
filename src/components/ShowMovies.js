import useSpecificMovie from "../hooks/useSpecificMovie"
import MovieList from "./MovieList"

const ShowMovies=({title})=>{

    //console.log("title: ",title)
    const json=useSpecificMovie(title)
    const movies=json?.results
    //console.log("movies: ",movies)
    //console.log("json",json);
    return(
        <div className=" w-screen">
           {movies&& <MovieList title={title}  movies={movies}/>}
        </div>
    )

}

export default ShowMovies