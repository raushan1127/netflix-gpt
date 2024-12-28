import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24  absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-3xl font-bold'>{title}</h1>
       <p className='py-6 text-lg w-1/2'>{overview}</p>
       <div className=''>
        <button className='bg-white text-black text-xl  px-12 rounded-lg py-3 hover:bg-opacity-80'> Play </button>
        <button className='bg-gray-500 text-white font-bold px-12 rounded-lg hover:bg-opacity-80 py-4 mx-2'>More Info</button>
       </div>

    </div>
  )
}

export default VideoTitle