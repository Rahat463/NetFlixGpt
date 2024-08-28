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
  const splitItem =item.split(/^[\.\-]/);

  // If there was a split, return the second part; otherwise, return the original item
 // console.log("splitItem: ",splitItem)
  const temp=splitItem.length > 1 ? splitItem[1].trim() : item.trim();
 // console.log("temp: ",temp)
  return temp.replace(/^\d+\.\s*/, '')
});
    //console.log("movies: ", movies)
   // console.log("filteredArray: ", filteredArray)
    setFilteredArray(filteredArray)
    // filteredArray?.map((title) =>  <ShowMovies key={title} title={title} />)
  }
  return (
    <div className="w-screen h-screen relative   ">
      <img src={BACK_IMG_URL} className="absolute -z-10"></img>
      <div className="absolute z-20 ml-[30%] mt-[8%]  w-1/2 ">
        <input
          ref={searchText}
          className="p-2  w-3/4  shadow-lg "
          placeholder={languageConstants[lang]?.searchInputPlaceholder}
        ></input>
        <button
          className=" p-2 w-1/6 rounded-lg shadow-lg border-2 hover:bg-white hover:text-black bg-black text-white"
          onClick={() => handleGptSearchClick()}
        >
          {languageConstants[lang]?.search}
        </button>
      </div>
      <div className="absolute  mt-[10%] ">
        {filteredArray?.map((title) => (
          <ShowMovies key={title} title={title} />
        ))}
      </div>
    </div>
  )
}

export default GptSearch
