import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchAsyncMovieOrShowDetail,
  getShowsOrMovieDetail,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  // console.log(imdbID);
  const data = useSelector(getShowsOrMovieDetail);
  const {
    Title,
    Awards,
    BoxOffice,
    Director,
    Language,
    Poster,
    Rated,
    Ratings,
    Released,
    Response,
    imdbRating,
    imdbVotes,
    Writer,
  } = data;

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  if (Response !== "True") {
    return <h1 className="mx-auto text-center display-1">Loading...</h1>;
  }

  return (
    <>
      <div className="container">
        <motion.div  className="row mx-auto bg_purple py-4"  initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.8}} transition={{duration:.6}}>
          <div className="col-12 col-sm-4 mx-auto  text-center my-2 ">
            <div className="img_container img-fluid ">
              <img src={Poster} alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-7  mx-auto  bg_transprent text-light p-4 ">
            <h2 className=""> {Title}</h2>
            <h5 className="">
              <span>
                <i className="fa-solid fa-trophy"></i>
              </span>{" "}
              Awards - {Awards}
            </h5>
            <h6>
              <span>
                <i className="fa-solid fa-sack-dollar"></i>
              </span>{" "}
              BoxOffice Collection - {BoxOffice}
            </h6>
            <div className="d-flex align-items-center">
              {" "}
              <span>
                <i className="fa-solid fa-star"></i> imdb -{" "}
              </span>{" "}
              <p className="mx-2 mb-0">imdb ratings {imdbRating} ,</p> imdb
              votes {imdbVotes}{" "}
            </div>
            <h6>Ratings</h6>
            {Ratings.map((data, index) => {
              return (
                <p key={index}>
                  {data.Source} - {data.Value}
                </p>
              );
            })}
            <p>Rated - {Rated}</p>
            <p>Language - {Language}</p>
            <p>Director - {Director}</p>
            <p>Writer - {Writer}</p>
            <p>Released Date - {Released}</p>
          </div>
        </motion.div>
      </div>
      
    </>
  );
};

export default MovieDetail;
