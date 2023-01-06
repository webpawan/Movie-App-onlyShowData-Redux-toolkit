import { AnimatePresence } from "framer-motion";
import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import MovieDetail from "./MovieDeatil/MovieDetail";
import PageNotFound from "./PageNotFound/PageNotFound";

const AnimationsRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimationsRoutes;
