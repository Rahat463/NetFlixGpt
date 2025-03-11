import React, { useState } from "react"
import { BACK_IMG_URL } from "../utils/contants"
import { useSelector } from "react-redux"
import languageConstants from "../utils/languageConstants"
import { useRef } from "react"
import client from "../utils/openai"
import useSpecificMovie from "../hooks/useSpecificMovie"
import ShowMovies from "./ShowMovies"
function GptSearch() {
  const lang = useSelector((store) => store.config?.language)
  const [filteredArray, setFilteredArray] = useState([])
  const searchText = useRef()
  const handleGptSearchClick = async () => {
    // console.log("search: ", searchText)
    const query =
      "based on the query , return array of  titles of some movies without any listing numbers or extra info : " +
      searchText.current.value
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    })

    //console.log("chat:result:",chatCompletion)
    const movies = chatCompletion?.choices[0]?.message?.content?.split("\n")
    // console.log("response.movies: ",movies)
    const filteredArray = movies?.map((item) => {
      // Check if the item starts with a special character like "." or "-"
      //const unlistedItem=
      const splitItem = item.split(/^[\.\-]/)

      // If there was a split, return the second part; otherwise, return the original item
      // console.log("splitItem: ",splitItem)
      const temp = splitItem.length > 1 ? splitItem[1].trim() : item.trim()
      // console.log("temp: ",temp)
      return temp.replace(/^\d+\.\s*/, "")
    })
    //console.log("movies: ", movies)
    // console.log("filteredArray: ", filteredArray)
    setFilteredArray(filteredArray)
    // filteredArray?.map((title) =>  <ShowMovies key={title} title={title} />)
  }
  return (
    <div className="w-screen h-screen relative p-4 sm:p-8">
      {/* Background Image */}
      <img
        src={BACK_IMG_URL}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        alt="Background"
      />

      {/* Search Bar Section */}
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-11/12 sm:w-1/2 p-2 sm:p-8 bg-white/70 rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-4">
        <input
          ref={searchText}
          className="p-2 w-full sm:w-3/4 border rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-400"
          placeholder={languageConstants[lang]?.searchInputPlaceholder}
        />
        <button
          className="p-2 w-full sm:w-1/6 rounded-lg shadow-lg border-2 hover:bg-black hover:text-white bg-white text-black transition sm:ml-2"
          onClick={() => handleGptSearchClick()}
        >
          {languageConstants[lang]?.search}
        </button>
      </div>

      {/* Movie List Section */}
      <div className="absolute top-[25%] w-full flex flex-col items-center gap-4 px-4">
        {filteredArray?.map((title, index) => (
          <ShowMovies key={index} title={title} />
        ))}
      </div>
    </div>
  )
}

export default GptSearch
