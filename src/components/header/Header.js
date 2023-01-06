import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchAsyncMovie, fetchAsyncShows } from '../../features/movies/movieSlice'

const Header = () => {
  const [term, setTerm] = useState("")
  const dispatch = useDispatch();
  const submitHandler = (e) =>{
    e.preventDefault()
    if(term === "") return alert("please fill the search bar")
    dispatch(fetchAsyncMovie(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
    console.log(term);
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg_navbar mb-5">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-light" to="/">MovieInfoBar</NavLink>
  
      <form className="d-flex align-items-center" onSubmit={submitHandler}>
        <input className="My_input me-2 "  type="search" placeholder="Search Movies and Shows" value={term} onChange={(e)=>setTerm(e.target.value)}/>
        <button className="card_btn input_btn mb-2" type="submit">Search</button>
      </form>
    
  </div>
</nav>
    
    </>
  )
}

export default Header