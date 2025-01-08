import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addpopularMovies} from "../utils/movieSlice"



const usePopularMovies = () => {

const dispatch = useDispatch();

  const getpopularMovies = async () => {
    const data = await fetch ( "https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const json =  await data.json();
    // console.log (json.results)
    dispatch(addpopularMovies(json.results))
}

  useEffect(() => {
    getpopularMovies();
  }, [])

}

export default usePopularMovies;