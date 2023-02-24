import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    movies: [],
    prev: null,
    next: null
};

// const getMovies = createAsyncThunk(
//     'movieSlice/getMovies',
//     async ({page}, thunkAPI) => {
//         try {
//             const {data} = await movieRequests.getAll(page);
//             console.log(data);
//             return data
//         }catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// );

const movieSlice = createSlice({
   name: 'movieSlice',
   initialState,
    reducers:{
       getMovies: (state,action) => {
           state.movies = action.payload
           state.prev = action.payload
           state.next = action.payload
       }
    },
    // extraReducers: builder =>
    //     builder.addCase(getMovies.fulfilled, (state, action) => {
    //         const {items, prev, next} = action.payload;
    //         console.log(items);
    //         state.movies = items
    //     })
});

const {reducer:movieReducer, actions:{getMovies}} = movieSlice;

const movieActions = {
getMovies
};

export {
    movieReducer,
    movieActions
}