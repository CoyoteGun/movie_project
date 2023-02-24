import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieRequests} from "../../api";


let initialState = {
    movies: [],
    prev: null,
    next: null
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieRequests.getAll();
            console.log(data);
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
       // getMovies: (state,action) => {
       //     state.movies = action.payload
       //     state.prev = action.payload
       //     state.next = action.payload
       // }
    },
    extraReducers: builder =>
        builder
        .addCase(getMovies.fulfilled, (state, action) => {
            console.log(action);
            const {results} = action.payload;
            console.log(results);
           return  state.movies = results
        })
});

const {reducer:movieReducer} = movieSlice;

const movieActions = {
getMovies
};

export {
    movieReducer,
    movieActions
}