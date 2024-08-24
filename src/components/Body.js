import React, { useEffect } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import LogIn from "./LogIn.js"
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase.js'
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "../utils/authSlice.js"
import useToggleSignIn from '../utils/useToggleSignIn.js'
function Body() {
  const dispatch=useDispatch()
  const router=createBrowserRouter([
    {
      path:"/",
      element:<LogIn/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ])
 
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Body
