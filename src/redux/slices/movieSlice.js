import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieRequests} from "../../api";


let initialState = {
    movies: [],
    prev: null,
    next: null
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieRequests.getAll(page);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getTopMovies = createAsyncThunk(
    'movieSlice/getTopMovies',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieRequests.getTopRated();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
   name: 'movieSlice',
   initialState,
    reducers:{
       getSearchMovies: (state,action) => {
           state.movies =action.payload
       }
    },
    extraReducers: builder =>
        builder
        .addCase(getMovies.fulfilled, (state, action) => {
            const {results, prev, next} = action.payload;
            state.movies = results
            state.prev = prev
            state.next = next
        })
            .addCase(getTopMovies.fulfilled, (state, action) => {
            const {results} = action.payload;
            state.movies = results
        })
});

const {reducer:movieReducer, actions:{getSearchMovies}} = movieSlice;

const movieActions = {
    getMovies,
    getTopMovies,
    getSearchMovies
};

export {
    movieReducer,
    movieActions
}