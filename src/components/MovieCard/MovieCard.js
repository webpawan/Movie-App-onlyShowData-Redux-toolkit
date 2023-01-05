import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movies, shows }) => {
  if (movies.Response !== "True") {
    return <h1>...loading</h1>;
  }

  return (
    <>
      {movies.Search.map((movie, index) => {
        // console.log(movie);
        const { Title, Poster, imdbID } = movie;
        return (
          <div
            key={index}
            className="mx-auto col-12 col-sm-6 col-md-4 col-lg-2 my-2  "
          >
            <div className="card ">
              <img src={Poster} className="img-thumbnail img-fluid" alt="..." />
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text text-light">{Title.substring(0, 50)}</p>
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

      <div className="row mx-auto">
        
          <h1 className="text-center text-light">show list</h1>
     
      </div>

      {shows.Response &&
        shows.Search.map((shows,index) => {
          const { Title, Poster, imdbID } = shows;
          
          return (
            <div
              key={index}
              className="mx-auto col-12 col-sm-6 col-md-4 col-lg-2 my-2  "
            >
              <div className="card ">
                <img src={Poster} className="img-thumbnail img-fluid" alt="..." />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-light">{Title.substring(0, 50)}</p>
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
