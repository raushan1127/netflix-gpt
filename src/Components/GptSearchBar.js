import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/constants';
import { useState } from 'react';






const GptSearchBar = () => {

  const dispatch = useDispatch(null);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [Langid, setlangid] = useState('en')

  const handleLanguageChange =(e) => {

    setlangid(e.target.value);
    console.log(Langid)
    // dispatch(changeLanguage(e.target.value));
  };



  // search movie in tmdb 

  const searchMovieTMDB = async (movie) => {
    const data = await fetch ("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS)
const json = await data.json()
return json.results;

  }

const langkey = useSelector((store) => store.config.lang);

//  const key = langkey;
//  console.log(lang[langkey].gptSearchplaceholder)
 const searchText = useRef(null)


const handleGptSearchClick = async () => {


const gptQuery =
  "Act as a Movie Recommendation system and suggest some movies for the query : " +
  searchText.current.value +
  ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  
const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-4o-mini',
    });
    

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
   
    // for eachmovie i will return a tmdb api 

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray)
    console.log(tmdbResults)

    dispatch (addGptMovieResult({movieNames: gptMovies , movieResults: tmdbResults}))

    

  
}

  return ( 
<div className='relative pt-[60%]  md:w-full md:pt-[20%]   md:flex md:grid-row-12 justify-center  md:justify-center '> 
        <form className=' mx-6 w-4/4 md:py-0 flex  md:px-0  md:w-1/2 bg-black md:grid md:grid-cols-12   rounded-lg   md:ml-72 ' onSubmit={(e) => e.preventDefault()}>
            <input type='text' className='p-2  m-4 md:p-4 md:m-4 col-span-9 rounded-lg ' placeholder= {lang[Langid].gptSearchplaceholder}></input>
            <button ref={searchText} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg ' onClick={handleGptSearchClick}>
                {lang[Langid].search}
            </button>
        </form>
        
        <select className='bg-gray-900 my-5 mx-28 py-2 px-2 md:my-5 md:py-2 md:ml-3   md:px-4 relative  text-white  rounded-lg ' onChange={handleLanguageChange} >
            {SUPPORTED_LANG.map((lang) => (<option key={lang.identifier} value={lang.identifier}> {lang.name}</option>) )}
           
          </select>
          
    </div>

    
  )
}

export default GptSearchBar;