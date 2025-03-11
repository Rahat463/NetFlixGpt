import React from 'react'
import { LOGO_URL } from '../utils/contants'
import { useNavigate } from 'react-router-dom'

function TrailerHeader() {
    const navigate=useNavigate()
    const handleClick=()=>{
       navigate("/browse")
    }
  return (
    <div className="w-full absolute flex justify-between bg-gradient-to-b from-slate-900 to-transparent postion z-10  sm:p-8">
    <img src={LOGO_URL} className='w-1/6'></img>
    <button
            className="mr-4 px-6 py-1 my-4 border-2  bg-purple-700 text-white rounded-lg font-bold hover:bg-white hover:text-black"
            onClick={handleClick}
          >
             Home
          </button>  
    </div>
  )
}

export default TrailerHeader
