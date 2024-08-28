import React, { useEffect } from "react"
import Header from "./Header"
import { updateProfile } from "firebase/auth"
import { auth } from "../utils/firebase"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import { useSelector } from "react-redux"
import GptSearch from "./GptSearch"
import useOnlineStatus from "../utils/useOnlineStatus"
import Shimmer from "./Shimmer"
import Footer from "./Footer"
function Browse() {

  const gptSearch=useSelector(store=>store.gpt?.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  
  const status=useOnlineStatus()
  return (
    <div>
    <Header />
   { status?
     <>{ 
      gptSearch?
        <>
      <GptSearch/>
      <Footer/>
      </>
      :<>
      <MainContainer />
      <SecondaryContainer />
      <Footer/>
      </>}</>:<Shimmer/>
      }
    </div>
  )
}

export default Browse
