import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({ posterPath }) => {
  if(!posterPath) return null ;
  return (
    <div className=' w-44 pr-4'>
        <img alt='Movie_poster' src={IMG_CDN_URL+ posterPath } ></img>
    </div>
  )
}

export default MovieCards