import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieAPi from "../../api/movieAPi";
import { APIKey } from "../../api/MovieApiKey";
import { addMovies, fetchAsyncMovie, fetchAsyncShows } from "../../features/movies/movieSlice";
import MoviListing from "../MovieListing/MoviListing";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const moviText = "Harry";
   dispatch(fetchAsyncMovie());
    dispatch(fetchAsyncShows());
  }, []);

  return (
    <>
      <MoviListing />
    </>
  );
};

export default Home;
