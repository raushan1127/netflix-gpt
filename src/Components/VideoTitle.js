import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 my-5 md:my-0 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-2xl md:text-3xl font-bold'>{title}</h1>
       <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
       <div className='my-2 md:my-0'>
        <button className='bg-white text-black text-xl px-4 md:px-12 rounded-lg py-2 md:py-4 hover:bg-opacity-80'> Play </button>
        <button className='bg-gray-500  hidden md:inline-block text-white font-bold px-12 rounded-lg hover:bg-opacity-80 py-4 mx-2'>More Info</button>
       </div>

    </div>
  )
}

export default VideoTitle