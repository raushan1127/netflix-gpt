import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector ((store) => store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  // const showGptSearch = useSelector ((store) => store.gpt.showGptSearch)

  return (
    <div>
      <Header />
      {showGptSearch ? ( <Gptsearch />) : (
        <>
      <MainContainer />
        <SecondaryContainer />
        </>
      )}
      
         
    </div>
  )
}

export default Browse