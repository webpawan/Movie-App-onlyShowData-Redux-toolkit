import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from "./Setting";
const MovieCard = ({ movies, shows }) => {
  
  if (movies.Response !== "True") {
    return <h1>...loading</h1>;
  }

  return (
    <>
  
      <Slider {...settings}>
        {movies.Search.map((movie, index) => {
          // console.log(movie);
          const { Title, Poster, imdbID } = movie;
          return (
            <div key={index} className=" my-2  ">
              <div className=" Mycard mx-3 p-1">
                <img
                  src={Poster}
                  className="img-fluid  img_card"
                  alt="..."
                />
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
            </div>
          );
        })}
      </Slider>

      <div className="row mx-auto mt-5 mb-2">
        <h2 className="text-center my_text w-25 mx-auto ">show list</h2>
      </div>

{shows.Response === "True" ? 
 <Slider {...settings}>
        {shows.Search.map((show, index) => {
          // console.log(movie);
 const { Title, Poster, imdbID } = show;
     
          return (
            <div key={index} className=" my-2  ">
              <div className=" Mycard mx-3 p-1">
                <img
                  src={Poster}
                  className="img-fluid  img_card"
                  alt="..."
                />
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
            </div>
          );
        })}
      </Slider> : <h1>...loading</h1>}
    </>
  );
};

export default MovieCard;

// <div className="row text-center my-2  text-light">
// <h3 className="text-capitalize col-12 ">shows list</h3>
// </div>
// {shows.Search.map((movie, index) => {
//   // console.log(movie);
//   const { Title, Poster } = movie;
//   return (
//     <div
//       key={index}
//       className="mx-auto col-12 col-sm-6 col-md-4 col-lg-2 my-2  "
//     >
//       <div className="card " >
//         <img src={Poster} className="img-thumbnail img-fluid" alt="..." />
//         <div className="card-body">
//           {/* <h5 className="card-title">Card title</h5> */}
//           <p className="card-text text-light">

//             {Title.substring(0, 50)}
//             </p>
//           <a href="/" className="card_btn">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// })}
