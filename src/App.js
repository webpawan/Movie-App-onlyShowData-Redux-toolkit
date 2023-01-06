import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "./App.css";
import AnimationsRoutes from "./components/AnimationsRoutes";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimationsRoutes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
