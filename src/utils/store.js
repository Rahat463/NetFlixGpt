import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import moviesSlice from "./moviesSlice";

const store=configureStore({
    reducer:{
        authenticate: authSlice,
        movies:moviesSlice,
    }
})

export default store