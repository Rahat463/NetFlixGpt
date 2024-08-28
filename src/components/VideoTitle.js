import React from "react"

function VideoTitle({ title, overview, rating }) {
  //w-screen aspect-video
  return (
    <div className="absolute bg-gradient-to-r from black ">
      <div className="py-80 px-10">
        <span className="flex">
          <p className="text-3xl text-white">{title}</p>
          <label className=" rounded-lg h-6 p-1 items-center text-white">
            {rating}⭐
          </label>
        </span>

        

        {/* <div className="my-10">
        <button className="bg-black/70 text-white hover:text-black hover:bg-white px-10 py-5 my-8 rounded shadow-lg ">
          Overview
        </button>
          <button className="bg-black/70 text-white hover:text-black hover:bg-white px-10 py-5 my-8 rounded shadow-lg mx-2 ">
            ▶️Play
          </button>
          <button className="bg-black/70 text-white hover:text-black hover:bg-white px-10 py-5 my-8 mx-2 rounded shadow-lg ">
            ℹ️ More info
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default VideoTitle
