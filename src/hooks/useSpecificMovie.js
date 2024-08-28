import React, { useState } from 'react'
import { options, SEARCH_MOVIE } from '../utils/contants'
import { useEffect } from 'react'

function useSpecificMovie(movieName) {
    
    const [jsonData,setJsonData]=useState({})
    //console.log("movieName: ",movieName)
    const fetchMovie=async ()=>{
        //https://api.themoviedb.org/3/search/movie?query=jawan&include_adult=false&language=en-US&page=1
         const response=await fetch(SEARCH_MOVIE+movieName+"&include_adult=false&language=en-US&page=1",options).catch((e)=>{console.log(e.message)})
         const json=await response?.json()
         setJsonData(json);
        // console.log("jsonData in fetchMovie: ",jsonData)
    }


    

    useEffect(()=>{
        fetchMovie()
    },[movieName])


  return jsonData
}

export default useSpecificMovie
