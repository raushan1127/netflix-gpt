import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addtopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = () => {

    const dispatch = useDispatch();

  const gettopRatedMovies = async () => {
    const data = await fetch ( "https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
    const json =  await data.json();
    // console.log (json.results)
    dispatch(addtopRatedMovies(json.results))
}

  useEffect(() => {
    gettopRatedMovies();
  }, [])

}

export default useTopRatedMovies