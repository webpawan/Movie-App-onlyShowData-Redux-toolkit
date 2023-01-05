import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovie = createAsyncThunk(
  "movies/fetchAsyncMovie",
  async () => {
    try {
      let res = await axios("https://www.omdbapi.com/?apikey=1ede3aaf&s=Harry");

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    try {
      let res = await axios(
        "https://www.omdbapi.com/?apikey=1ede3aaf&s=friends&type=series"
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
    console.log(id);
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
    removeSelectedMovieOrShow : (state) =>{
      state.selectedMovieOrShow = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovie.pending]: (state) => {
      //   console.log("pending");
    },
    [fetchAsyncMovie.fulfilled]: (state, { payload }) => {
      //   console.log("successfull fetch");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovie.rejected]: (state) => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      // console.log("successfull fetch");
      return { ...state, shows: payload };
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
export const getShowsOrMovieDetail = (state) => state.movies.selectedMovieOrShow;
