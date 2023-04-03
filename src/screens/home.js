import React from 'react';
import Navbar from '../components/navbar';
import '../global.css';
import image from '../images/image.jpg'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='maindiv'>
        <p className=' container'><img src={image} alt="Not Found" style={{ float: "right", width: "250px", height: "250px", marginLeft: "15px", marginRight: "50px" }} />
          <div style={{ color: 'gray', fontSize: "20px" }}>
            HELLO!
          </div>
          <div style={{fontSize:"40px"}}>
            I'm <span style={{fontWeight:"bold"}}>Ashish
            <br />
            </span>
             <strong>a</strong> Full Stack Web Developer
          </div>
        </p>
      </div>
    </>
  )
}
