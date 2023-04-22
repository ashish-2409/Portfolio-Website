import React from 'react';
import Navbar from '../components/navbar';
import TechStackScreen from './techStackScreen';
import CodingProfilesScreen from './codingProfilesScreen';
import About from './about';
import Projects from './projects'
import Contact from './contact';
import Footer from './footer';
import '../global.css';
import image from '../images/image.jpg'

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="intro">
        <div style={{ color: 'gray', fontSize: "1.1em" }} className='introText'>
          HELLO!
        </div>
        <div style={{ fontSize: "1.7em" }} className='introText'>
          I'm <span style={{ fontWeight: "bolder" }} className='introText'>Ashish
            <br />
          </span>
          <strong style={{ fontWeight: "bolder" }} className='introText'>a</strong> Full Stack Developer
        </div>
        <div style={{ fontSize: "1em" }} className='introText'>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam, eiu consectetur adipisicing elit. Fugit, quis.
        </div>
        <div style={{ textAlign: 'center' }}>

          <img src={image} alt="" className='introImg' />
        </div>
      </section>

      {/* Intro for larger screen sizes */}
      <div className='maindiv' id="intro2">
        <p className=' container'><img src={image} alt="Not Found" style={{ float: "right", width: "250px", height: "250px", marginLeft: "15px", marginRight: "50px" }} />
          <div style={{ color: 'gray', fontSize: "1.1em" }}>
            HELLO!
          </div>
          <div style={{ fontSize: "1.7em" }} >
            I'm <span style={{ fontWeight: "bolder" }}>Ashish
              <br />
            </span>
            <strong style={{ fontWeight: "bolder" }}>a</strong> Full Stack Developer
          </div>
          <div style={{ fontSize: "1em" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quis.
          </div>
        </p>
      </div>

      <TechStackScreen />
      <CodingProfilesScreen />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
