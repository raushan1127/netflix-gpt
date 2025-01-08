import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },

    reducers: {
    addNowPlayingMovies: (state, action) =>{
        state.nowPlayingMovies= action.payload;  
    },
    addTrailerVideo: (state,action) => {
        state.trailerVideo = action.payload
    },
    addpopularMovies: (state,action) => {
        state.popularMovies = action.payload
    },
    addtopRatedMovies: (state,action) => {
        state.topRatedMovies = action.payload
    },
    addupcomingMovies: (state,action) => {
        state.upcomingMovies = action.payload
    }
   
    }

});

export const { addNowPlayingMovies, addTrailerVideo, addpopularMovies, addtopRatedMovies, addupcomingMovies } = movieSlice.actions;
export default  movieSlice.reducer;