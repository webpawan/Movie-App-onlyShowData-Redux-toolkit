import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDeatil/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './App.css';
const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>

    </Router>
    </>
  )
}

export default App