import React from 'react'
import { MOVIE_CARD_IMG } from '../utils/contants'

function MovieCard({poster_path,original_title,release_date}) {
    //console.log("poster_path",poster_path)
   
  return (
    <div className=' w-48  bg-gradient-to-t from-black rounded-lg shadow-lg p-2 hover:bg-white hover:translate-y-[-10px] transform transition-transform duration-300 cursor-pointer border-2 border-black   sm:p-8' >
      <img src={MOVIE_CARD_IMG+poster_path} alt="image" className='w-full h-4/5 rounded-lg'/>
      <div className=''>
        <h1 className='text-white py-1 '>
            {original_title}
        </h1>
        <h2 className='text-white py-1'>
            {release_date}
        </h2>
      </div>
    </div>
  )
}

export default MovieCard
