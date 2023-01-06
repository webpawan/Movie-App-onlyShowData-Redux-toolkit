import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { APIKey } from "../../api/MovieApiKey";

export const fetchAsyncMovie = createAsyncThunk(
  "movies/fetchAsyncMovie",
  async (search) => {
    try {
      let res = await axios(
        `https://www.omdbapi.com/?apikey=${APIKey}&s=${search}&type=movie`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (search) => {
    try {
      let res = await axios(
        `https://www.omdbapi.com/?apikey=${APIKey}&s=${search}&type=series`
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrDetail",
  async (id) => {
    
    try {
      let res = await axios(
        `https://www.omdbapi.com/?apikey=1ede3aaf&i=${id}&Plot=full`
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  ready:false,
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovie.pending]: (state) => {
        // console.log("pending");
      return {...state,ready:false}
    },
    [fetchAsyncMovie.fulfilled]: (state, { payload }) => {
      //   console.log("successfull fetch");
      // state.ready = true

      return { ...state, movies: payload,ready:true };
    },
    [fetchAsyncMovie.rejected]: (state) => {
      console.log(state.ready);
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
     
      return { ...state, shows: payload,ready:true };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      // console.log("successfull fetch");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export default movieSlice.reducer;
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const ready = (state) => state.movies.ready
export const getShowsOrMovieDetail = (state) =>
  state.movies.selectedMovieOrShow;
