import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MoviListing = () => {
  const movies = useSelector(getAllMovies);
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

  return <>
  <div className="container">
    <div className="row text-center my-2 bg-dark text-light">
      <h3 className="text-capitalize col-12">movies</h3>
      </div>
      <div className="container-fluid mx-auto bg-dark">
          <div className="row mx-auto">
   <MovieCard data={movies}/>

   </div>
        </div>
  </div>
  </>;
};

export default MoviListing;
