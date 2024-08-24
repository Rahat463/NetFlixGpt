import { useState } from "react"

const useToggleSignIn=(props)=>{
    const  [toggle,setToggle]=useState("Sign In")
   if(props!=null) setToggle(props)
    return toggle
}
export default useToggleSignIn