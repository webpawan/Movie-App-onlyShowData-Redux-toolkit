import React from 'react'

const Home = () => {
  return (
    <>
    <div className="container-fluid">
    <h1 className='text-success bg-light mx-auto text-center p-2 text-capi'>Home js</h1>
    <div className="row">
        <div className="col-11 col-md-4 col-lg-3 m-2 mx-auto text-left">
            <div className="card p-2 shadow">
              <div className="card-body">
              <div className="card-img-top"></div>
              <div className="card-header">data</div>
                <div className="card-title ">card name</div>
                <div className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto autem mollitia ipsum minus quos consectetur!</div>
                <button className="btn btn-outline-info btn-sm me-auto my-2" >click</button>
              </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Home