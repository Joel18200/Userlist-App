import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div>
      <div className="container">
        <Navbar/>
        <div className="row"style={{marginTop:80}}>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label htmlFor="" className="form-label">
    <b>Enter Name</b></label>
    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<button className="btn btn-success">SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search
