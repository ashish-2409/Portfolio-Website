import React from 'react'
import { Link } from 'react-router-dom'
import '../global.css'
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar1">
        <div class="container-fluid">
          <a className="navbar-brand fs-1 fw-bold ms-3" style={{ color: "#1164bd" }} href="#">Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className="nav-item">
                <a className="nav-link active mx-1 navlinks fw-bold" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 navlinks fw-bold" href="#aboutSection">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 navlinks fw-bold" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 navlinks fw-bold" herf="#">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 me-5 navlinks fw-bold" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* for larger screens */}

      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar2">
        <div class="container-fluid">
          <a className="navbar-brand fs-1 fw-bold ms-3" style={{ color: "#1164bd" }} href="#">Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className="nav-item">
                <a className="nav-link active mx-1 navlinks fw-bold" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 navlinks fw-bold" href="#aboutSection2">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 navlinks fw-bold" href="#projects2">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 navlinks fw-bold" herf="#">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 me-5 navlinks fw-bold" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}
