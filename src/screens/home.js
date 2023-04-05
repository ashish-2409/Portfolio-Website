import React from 'react';
import Navbar from '../components/navbar';
import About from './about';
import Projects from './projects'
import '../global.css';
import image from '../images/image.jpg'
import htmllogo from '../images/html.jpg'
import cssogo from '../images/css.png'
import jslogo from '../images/js.png'
import reactlogo from '../images/react.png'
import mongodblogo from '../images/mongodb.jpg'
import pythonlogo from '../images/python.webp'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='maindiv'>
        <p className=' container'><img src={image} alt="Not Found" style={{ float: "right", width: "250px", height: "250px", marginLeft: "15px", marginRight: "50px" }} />
          <div style={{ color: 'gray', fontSize: "20px",fontFamily:"Regular" }}>
            HELLO!
          </div>
          <div style={{ fontSize: "40px",fontFamily:"Regular" }}>
            I'm <span style={{ fontFamily:"ExtraBold", fontWeight:"bolder" }}>Ashish
              <br />
            </span>
            <strong style={{ fontFamily:"ExtraBold", fontWeight:"bolder" }}>a</strong> Full Stack Developer
          </div>
          <div style={{ width: "500px",fontFamily:"Regular" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quis.
          </div>
        </p>
      </div>

      {/* TECH STACK */}
      {/* Make this part dynamic using lists and add feature to add to this list */}

      <div className='techStack'>
        <ul className='listHorizontal'>
        <li>
            <strong style={{marginLeft:"-210px",fontFamily:"ExtraBold", fontWeight:"bolder"}}>Tech Stack |</strong>
          </li>
          <li>
            <img src={htmllogo} alt="" style={{height:"40px" ,marginLeft:"20px", marginRight:"20px"}} />
          </li>
          <li>
            <img src={cssogo} alt="" style={{height:"35px" ,marginLeft:"20px", marginRight:"20px", marginTop:"5px"}} />
          </li>
          <li>
            <img src={jslogo} alt="" style={{height:"40px" ,marginLeft:"20px", marginRight:"20px"}} />
          </li>
          <li>
            <img src={reactlogo} alt="" style={{height:"40px" ,marginLeft:"20px", marginRight:"20px"}} />
          </li>
          <li>
            <img src={mongodblogo} alt="" style={{height:"40px" ,marginLeft:"20px", marginRight:"20px"}} />
          </li> 
          <li>
            <img src={pythonlogo} alt="" style={{height:"40px" ,marginLeft:"20px", marginRight:"20px"}} />
          </li>          
        </ul>
      </div>
    <About/>
    <Projects/>
    </>
  )
}
