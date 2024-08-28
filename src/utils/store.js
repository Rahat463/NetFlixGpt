import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const store=configureStore({
    reducer:{
        authenticate: authSlice,
        movies:moviesSlice,
        gpt:gptSlice,
        config:configSlice
    }
})

export default store