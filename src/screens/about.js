import React from 'react'
import image2 from '../images/image2.jpg'
import '../global.css'
export default function About() {
  return (
    <div className='aboutdiv' id='aboutSection'>
        <p className=' container'><img src={image2} alt="Not Found" style={{ float: "left", width: "250px", height: "250px", marginLeft: "15px", marginRight: "50px",borderRadius:"20px" }} />
          <div style={{ color: 'blue',fontSize:"14px" }}>
            ABOUT ME
          </div>
          <div style={{ fontSize: "15px" }}>
            <span style={{ fontWeight: "bold" }}>A dedicated Fullstack Web Developer based of India
            </span>
            </div>
            <div style={{fontSize:"13px", marginTop:"20px"}}>
              As a Fullstack web developer, I possess an arsenal of weapons including HTML, CSS, JS, MERN stack, Django and react-native (Android). I excel at creating and maintaining responsive web applicatons that offer users a smooth and dynamic experience. Along with being a developer, i'm a competitive programmer as well being Expert on Codeforces, 4* at Codechef and Knight at Leetcode. I'm also a team player who thrives in collaborating with cross functional teams to product outstanding web applications.
            </div>
        </p>
      </div>
  )
}
