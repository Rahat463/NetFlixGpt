
import { createSlice } from "@reduxjs/toolkit"

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        //specificMovieTrailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        },
        // addSpecificMovieTrailer:(state,action)=>{
        //     state.specificMovieTrailer=action.payload
        // }
    },
})


export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions
export default moviesSlice.reducer