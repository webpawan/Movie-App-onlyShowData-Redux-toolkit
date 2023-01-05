import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MoviListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // console.log(movies);
  // let renderMovies = "";

  // renderMovies =
  //   movies.Response === "True" ? (
  //     movies.Search.map((movie, index) => {
  //      return  <MovieCard key={index} data={movie} />;
  //     })
  //   ) : (
  //     <div className="movies_error">
  //       <h3>{movies.Error}</h3>
  //     </div>
  //   );

  return (
    <>
      <div className="container ">
        <div className="row text-center my-2  text-light">
          <h3 className="text-capitalize col-12 ">movies list</h3>
        </div>
        <div className="container-fluid mx-auto bg-card__container">
          <div className="row mx-auto">
            <MovieCard movies={movies} shows={shows} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviListing;
