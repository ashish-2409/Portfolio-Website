import React from 'react';
import Navbar from '../components/navbar';
import About from './about';
import Projects from './projects'
import Contact from './contact';
import Footer from './footer';
import '../global.css';
import image from '../images/image.jpg'
import html from '../images/html.jpg'
import css from '../images/css.png'
import js from '../images/js.png'
import python from '../images/python.webp'
import rj from '../images/react.png'
import mongo from '../images/mongodb.jpg'

import codeforces from '../images/codeforces.png'
import codechef from '../images/codechef.jpg'
import atcoder from '../images/atcoder.png'
import leetcode from '../images/leetcode.png'
import github from '../images/github.png'


import { codingProfiles, techStack } from '../data';
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

      {/* TECH STACK */}
      {/* add feature to add to this list */}

      <section id="techStack">
        <h4>
          Tech Stack
        </h4>
        <div className="grid">
          <img src={html} alt="" className='techImg' />
          <img src={css} alt="" className='techImg' />
          <img src={js} alt="" className='techImg' />
          <img src={python} alt="" className='techImg' />
          <img src={rj} alt="" className='techImg' />
          <img src={mongo} alt="" className='techImg' />
        </div>
      </section>


      {/* Coding Profiles */}

      <section id="codingProfiles">
        <h4>
          Coding Profiles
        </h4>
        <div className="grid5col">
          <a href=""><img src={codeforces} className='profileImg' alt='logo' /></a>
          <a href=""><img src={codechef} className='profileImg' alt='logo' /></a>
          <a href=""><img src={atcoder} className='profileImg' alt='logo' /></a>
          <a href=""><img src={leetcode} className='profileImg' alt='logo' /></a>
          <a href=""><img src={github} className='profileImg' alt='logo' /></a>
        </div>
      </section>
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  )
}
