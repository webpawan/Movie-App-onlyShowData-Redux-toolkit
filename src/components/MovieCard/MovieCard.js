import React from "react";

const MovieCard = ({ data }) => {
  if (data.Response !== "True") {
    return <h1>...loading</h1>;
  }
  return (
    <>
      {data.Search.map((movie, index) => {
        // console.log(movie);
        const { Title, Poster } = movie;
        return (
          <div
            key={index}
            className=" col-12 col-sm-6 col-md-4 col-lg-3 my-2  "
          >
            <div className="card " style={{ width: "14rem" }}>
              <img src={Poster} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">
                  
                  {Title.substring(0, 20)}
                  </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieCard;
