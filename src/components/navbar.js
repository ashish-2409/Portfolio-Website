import React from 'react'
import { Link } from 'react-router-dom'
import '../global.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fw-bold ms-3" style={{color:"#1164bd"}} to="#">Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-1 navlinks fw-bold" aria-current="page" to="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2 navlinks fw-bold" to="#">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2 navlinks fw-bold" to="#">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2 navlinks fw-bold" to="#">Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2 me-5 navlinks fw-bold" to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
