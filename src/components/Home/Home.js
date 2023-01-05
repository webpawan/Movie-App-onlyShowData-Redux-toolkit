// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import movieAPi from "../../api/movieAPi";
// import { APIKey } from "../../api/MovieApiKey";
import {  fetchAsyncMovie, fetchAsyncShows } from "../../features/movies/movieSlice";
import MoviListing from "../MovieListing/MoviListing";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const moviText = "Harry";
   dispatch(fetchAsyncMovie());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <>
      <MoviListing />
    </>
  );
};

export default Home;
