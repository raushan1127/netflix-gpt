import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title, movies}) => {
  // console.log(movies)
  return (
    <div className=' p-6 '>
       <h1 className=' py-4 pl-4 text-3xl text-white'>{title}</h1>
    <div className='flex overflow-x-auto no-scrollbar'>
        <div className='flex'>
          {movies && movies.map((movie) => (<MovieCards posterPath={movie.poster_path}/>))}
        </div>
    </div>

    </div>
  )
}

export default MovieList;