import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./Setting";
import { motion } from "framer-motion";

const MovieCard = ({ movies, shows }) => {
  if (movies.Response !== "True") {
    return (
      <div className="bg-light mx-auto text-center">
        <h1>searching is running</h1>
        <p>some time we dont have data so sorry 🙏</p>
      </div>
    );
  }

  return (
    <>
      <div className="row mx-auto mt-5 mb-2">
        <h2 className="text-center my_text w-25 mx-auto ">Movies list</h2>
      </div>

      <Slider {...settings}>
        {movies.Search.map((movie, index) => {
          // console.log(movie);
          const { Title, Poster, imdbID } = movie;
          return (
            <motion.div initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.2}} transition={{duration:.6} } key={index} className=" my-2  ">
              <div className=" Mycard mx-3 p-1">
                <img src={Poster} className="img-fluid  img_card" alt="..." />
                <div className="">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-light">
                    {Title.substring(0, 50)}
                  </p>
                  {/* <a href="/" className="card_btn">
                    Go somewhere
                  </a> */}
                  <NavLink className="card_btn " to={`/movie/${imdbID}`}>
                    {" "}
                    check details
                  </NavLink>
                </div>
              </div>
            </motion.div>
          );
        })}
      </Slider>

      <div className="row mx-auto mt-5 mb-2">
        <h2 className="text-center my_text w-25 mx-auto ">Shows list</h2>
      </div>

      {shows.Response === "True" ? (
        <Slider {...settings}>
          {shows.Search.map((show, index) => {
            // console.log(movie);
            const { Title, Poster, imdbID } = show;

            return (
              <motion.div initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.2}} transition={{duration:.6} } key={index} className=" my-2  ">
                <div className=" Mycard mx-3 p-1" >
                  <img src={Poster} className="img-fluid  img_card" alt="..." />
                  <div className="">
                    {/* <h5 className="card-title">Card title</h5> */}
                    <p className="card-text text-light">
                      {Title.substring(0, 50)}
                    </p>
                    {/* <a href="/" className="card_btn">
                    Go somewhere
                  </a> */}

                    <NavLink className="card_btn" to={`/movie/${imdbID}`}>
                      {" "}
                      check details
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      ) : (
        <h1>...loading</h1>
      )}
    </>
  );
};

export default MovieCard;

