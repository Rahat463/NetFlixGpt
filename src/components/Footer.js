import React from "react"
import { XLOGO,FBLOGO, XID, FBID } from "../utils/contants"
import { Link } from "react-router-dom"
const Footer=()=> {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/80 text-white  p-4 flex items-center justify-between h-[10%]">
      <p className="text-white px-2">©️ Sheikh Rahat Mahmud </p>
      <div className="flex justify-between w-3/12">
      <p>
       <Link to={XID}> <img src={XLOGO} className="w-[65%] mx-2  rounded shadow-lg bg-slate-400 cursor-pointer hover:translate-y-[-10px] transform transition-transform duration-300"/>
       </Link>
      </p>
      <p>
      <Link to={FBID}> <img src={FBLOGO} className="w-[10%] mx-20  rounded shadow-lg bg-slate-400 cursor-pointer hover:translate-y-[-10px] transform transition-transform duration-300"/>
      </Link>
      </p>
      </div>
    </div>
  )
}
export default Footer