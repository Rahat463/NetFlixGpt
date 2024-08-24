import React, { useEffect } from "react"
import Header from "./Header"
import { updateProfile } from "firebase/auth"
import { auth } from "../utils/firebase"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
function Browse() {
  
   useNowPlayingMovies()

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
