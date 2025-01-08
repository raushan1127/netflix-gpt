import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { useSelector } from 'react-redux'

const Gptsearch = () => {

  return (
    <><div className='fixed -z-10'>
    <img className='h-screen object-cover md:w-screen' src='https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg'>
    </img>
    </div>
    <div className=''>
        <GptSearchBar />
        <GptMovieSuggestion /> 
    </div>
    </>
    
  )
}

export default Gptsearch