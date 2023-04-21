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
        <div style={{ color: 'gray', fontSize: "1.1em" }}>
          HELLO!
        </div>
        <div style={{ fontSize: "1.7em" }}>
          I'm <span style={{ fontWeight: "bolder" }}>Ashish
            <br />
          </span>
          <strong style={{ fontWeight: "bolder" }}>a</strong> Full Stack Developer
        </div>
        <div style={{ width: "100%", fontSize: "1em" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing
          <br />
          elit. Aperiam, eiu consectetur adipisicing elit. Fugit, quis.
        </div>
        <div style={{ textAlign: 'center' }}>

          <img src={image} alt="" className='introImg' />
        </div>
      </section>
      <TechStackScreen/>
      <CodingProfilesScreen/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
