import React from 'react'
import { Link } from 'react-router-dom'
import '../global.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-white ">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fw-bold ms-3" style={{color:"#1164bd", fontFamily:"ExtraBold"}} to="#">Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-1 navlinks fw-bold" aria-current="page" to="#" style={{fontFamily:"ExtraBold"}}>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 navlinks fw-bold" href="#aboutSection" style={{fontFamily:"ExtraBold"}}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 navlinks fw-bold" href="#projects" style={{fontFamily:"ExtraBold"}}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 navlinks fw-bold" herf="#" style={{fontFamily:"ExtraBold"}}>Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2 me-5 navlinks fw-bold" href="#"  style={{fontFamily:"ExtraBold"}}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
