import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import Animations from "../Animations/Animations";
import MovieCard from "../MovieCard/MovieCard";

const MoviListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const size = Object.keys(movies).length;

  return (
    <>
      <div className="container ">
       <Animations/>
        <div className="row text-center my-2  text-light">
          <h3 className="text-capitalize col-12 my_text--dark w-25 mx-auto">
            movies list shows
          </h3>
        </div>
        <div className="container-fluid mx-auto bg-card__container">
          {size === 0 ? <h1 className="text-capitalize text-center mx-auto">search movies and shows in search bar</h1> : <MovieCard movies={movies} shows={shows} />}
          
        </div>
      </div>
    </>
  );
};

export default MoviListing;
