import React, { useState, useEffect } from "react"
import { LOGO_URL, PROFILE_URL, SUPPORTED_LANG } from "../utils/contants"
import { useNavigate } from "react-router-dom"
import useToggleSignIn from "../utils/useToggleSignIn"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useSelector, useDispatch } from "react-redux"
import DropDown from "./DropDown"
import { onAuthStateChanged } from "firebase/auth"
import { addUser, removeUser } from "../utils/authSlice"
import { setShowGptSearch } from "../utils/gptSlice"
import { setLanguage } from "../utils/configSlice"
import useOnlineStatus from "../utils/useOnlineStatus"
import Shimmer from "./Shimmer"
function Header() {
  //const toggle=useToggleSignIn()

  const gptSearch = useSelector((store) => store.gpt?.showGptSearch)
  const [name, setName] = useState("Sign In")
  const navigate = useNavigate()
  const user = useSelector((store) => store.authenticate)
  const [dropDown, setDropDown] = useState(false)
  //if (user != null) setName("Sign Up")
  //if(user!=null){const {displayName}=user}
  const dispatch = useDispatch()
  const toggler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setName("")
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      })
  }
  const handleClick = () => {
    //return  <DropDown/>
    setDropDown(!dropDown)
  }
  const handleGptClick = () => {
    dispatch(setShowGptSearch())
  }
  const handleLanguageChange=(e)=>{
    //console.log(e.target.value)
    dispatch(setLanguage(e.target.value))
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user
        dispatch(setShowGptSearch())
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse")

        // ...
      } else {
        // User is signed out
        dispatch(setShowGptSearch())
        dispatch(removeUser())
        navigate("/")
        // ...
      }
    })
  }, [])
  const status=useOnlineStatus()
  //console.log("status= ",status)
  //HERE one thing should be noted that  <img src={PROFILE_URL} alt="profile" className="w-1/12 h-1/3 rounded p-1 cursor-pointer" onClick={handleClick()}></img> this will lead to
  // a infinite loop as handleClick() is called as soon as img is rendered so either handleClick is passed by reference using onClick={handleClick()} or through a callback function
  // ()=>handleClick()
  return (
    <div className=" sm:p-8">
    {status?<div className="w-full absolute flex justify-between bg-gradient-to-b from-slate-900 to-transparent postion z-10">
      <img src={LOGO_URL} className="w-1/6"></img>
      <div className="flex justify-end items-center ">
      {(gptSearch&&user)&&<select className="text-black px-6 py-2 m-2 rounded " onChange={handleLanguageChange}>
      {
        SUPPORTED_LANG.map(lang=><option value={lang.identifier} key={lang.identifier} >
         {lang.value}
         </option>)
      }
        
       
      </select>}
        {user && (
          <button
            className="p-2 m-1 bg-slate-900/50 text-white rounded-lg font-bold hover:bg-white hover:text-black hover:translate-y-[-10px] transform transition-transform duration-300"
            onClick={handleGptClick}
          >
            {gptSearch ? "Home" : "GPT Search"}
          </button>
        )}
        {user && (
          <img
            src={PROFILE_URL}
            alt="profile"
            className=" w-[3%]    relative rounded-lg"
            //onClick={() => handleClick()}
          ></img>
        )}
        {/* {dropDown&&<br/>} */}
        <p className="p-2 ">{dropDown && <DropDown />}</p>
        {user && <h1 className="text-white">{user.displayName}</h1>}
        {//console.log("user: ", user?.displayName)
        }
        <p
          className="cursor-pointer text-white text-2xl m-2 hover:bg-white hover:text-black p-1 rounded-lg shadow-lg hover:translate-y-[-10px] transform transition-transform duration-300"
          onClick={() => toggler()}
        >
          {/* {name} */}
          {user != null && "Sign Out"}
          {//console.log(user)
          }
        </p>
      </div>
    </div>:<Shimmer/>}
    </div>
  )
}

export default Header
