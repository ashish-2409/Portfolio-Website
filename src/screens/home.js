import React from 'react';
import Navbar from '../components/navbar';
import About from './about';
import Projects from './projects'
import '../global.css';
import image from '../images/image.jpg'

import { codingProfiles, techStack } from '../data';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='maindiv'>
        <p className=' container'><img src={image} alt="Not Found" style={{ float: "right", width: "250px", height: "250px", marginLeft: "15px", marginRight: "50px" }} />
          <div style={{ color: 'gray', fontSize: "20px", fontFamily: "Regular" }}>
            HELLO!
          </div>
          <div style={{ fontSize: "40px", fontFamily: "Regular" }}>
            I'm <span style={{ fontFamily: "ExtraBold", fontWeight: "bolder" }}>Ashish
              <br />
            </span>
            <strong style={{ fontFamily: "ExtraBold", fontWeight: "bolder" }}>a</strong> Full Stack Developer
          </div>
          <div style={{ width: "500px", fontFamily: "Regular" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quis.
          </div>
        </p>
      </div>

      {/* TECH STACK */}
      {/* add feature to add to this list */}

      <div className='techStack'>
        <ul className='listHorizontal'>
          <li>
            <strong style={{ marginLeft: "-210px", fontFamily: "ExtraBold", fontWeight: "bolder" }}>Tech Stack |</strong>
          </li>
          {
            techStack.map((e) => {
              return (
                <li>
                  <img src={e.img} alt={e.title} style={{ height: "40px", marginLeft: "20px", marginRight: "20px" }} />
                </li>
              )
            })
          }
        </ul>
      </div>


      {/* Coding Profiles */}

      <div className='codingProfiles' style={{ marginTop: "100px" }}>
        <ul className='listHorizontal'>
          <li>
            <strong style={{ marginLeft: "-210px", fontFamily: "ExtraBold", fontWeight: "bolder" }}>Coding Profiles |</strong>
          </li>
          {
            codingProfiles.map((e) => {
              return (
                <li>
                  <a href={e.link} target='__blank'>
                    <img src={e.img} alt={e.title} className='logoImages' />
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>

      <About />
      <Projects />
    </>
  )
}
