import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieAPi from "../../api/movieAPi";
import { APIKey } from "../../api/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";
import MoviListing from "../MovieListing/MoviListing";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const moviText = "Harry";
    const fetchMovies = async () => {
    
      // https://www.omdbapi.com/?apikey=1ede3aaf&s=Harry
      try {
        let res = await axios("https://www.omdbapi.com/?apikey=1ede3aaf&s=Harry");
        // console.log(res.data);
        dispatch(addMovies(res.data))
      } catch (error) {console.log(error);
        
      }
      // try {
      //   let data  = await movieAPi.get(`?apikey=${APIKey}&s=${moviText}&type=movie`);
      //   console.log(data);
      // } catch (error) {
      //   console.log(error);
      // }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <MoviListing />
    </>
  );
};

export default Home;
