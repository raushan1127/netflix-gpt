import React, { useEffect } from 'react'
import useMovieTrailer from '../Hooks/useMovieTrailer';
import { useSelector } from 'react-redux';


const VideoBackground = ({movieId}) => {
    
useMovieTrailer(movieId);
const trailerVideo = useSelector(store => store.movies?.trailerVideo)
// console.log(trailerVideo);



  return (
    <div className='w-screen mt-5 md:mt-0'>
      <iframe className='w-screen  aspect-video'
      src={"https://www.youtube.com/embed/7l3hfD74X-4?si=QAC623KKF3BAKTkk" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture;  web-share" 
         referrerpolicy="strict-origin-when-cross-origin" 
        >
      </iframe>
    </div>
  )
}

export default VideoBackground;