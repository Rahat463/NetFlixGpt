import React, { useState ,useEffect} from "react"
import { LOGO_URL, PROFILE_URL } from "../utils/contants"
import { useNavigate } from "react-router-dom"
import useToggleSignIn from "../utils/useToggleSignIn"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useSelector ,useDispatch} from "react-redux"
import DropDown from "./DropDown"
import { onAuthStateChanged } from "firebase/auth"
import { addUser,removeUser } from "../utils/authSlice"
function Header() {
  //const toggle=useToggleSignIn()
  const [name, setName] = useState("Sign In")
  const navigate = useNavigate()
  const user = useSelector((store) => store.authenticate)
  const [dropDown,setDropDown]=useState(false)
  //if (user != null) setName("Sign Up")
//if(user!=null){const {displayName}=user}
  const dispatch=useDispatch()
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
  const handleClick=()=>{
   //return  <DropDown/>
   setDropDown(!dropDown)
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
       navigate("/browse")

        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
        // ...
      }
    });
  },[])
//HERE one thing should be noted that  <img src={PROFILE_URL} alt="profile" className="w-1/12 h-1/3 rounded p-1 cursor-pointer" onClick={handleClick()}></img> this will lead to 
// a infinite loop as handleClick() is called as soon as img is rendered so either handleClick is passed by reference using onClick={handleClick()} or through a callback function 
// ()=>handleClick()
  return (
    <div className="w-full absolute flex justify-between bg-gradient-to-b from-slate-900 to-transparent">
      <img src={LOGO_URL} className="w-1/6"></img>
      <div className="flex justify-end items-center ">
     
     {user&& <img src={PROFILE_URL} alt="profile" className=" w-1/12 h-1/3 rounded p-1 cursor-pointer relative" onClick={()=>handleClick()}></img>}
      {/* {dropDown&&<br/>} */}
      <p className="p-2 ">
      {dropDown&&<DropDown/>}
      </p>
      {user&&<h1 className="text-white">{user.displayName}</h1>}
      {console.log("user: ",user?.displayName)}
      <p
        className="cursor-pointer text-white text-2xl m-2"
        onClick={() => toggler()}
      >
        {/* {name} */}
       {user!=null && "Sign Out"}
       {console.log(user)}
      </p>
      </div>
    </div>
  )
}

export default Header
