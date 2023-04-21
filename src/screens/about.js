import React from 'react'
import image2 from '../images/image2.jpg'
import '../global.css'
export default function About() {
  return (
    <>
    <section id="aboutSection">
    <div style={{ color: 'blue', fontSize: "1em", fontWeight: "bolder", textAlign: 'center', marginBottom: "20px" }}>
      ABOUT ME
    </div>
    <div style={{ fontSize: "1em" }}>
      <span style={{ fontFamily: "ExtraBold", fontWeight: "bolder" }}>A dedicated Fullstack Web Developer based of India
      </span>
    </div>
    <div style={{ fontSize: "0.9em", marginTop: "20px", fontFamily: "Regular" }}>
      As a Fullstack web developer, I possess an arsenal of weapons including HTML, CSS, JS, MERN stack, Django and react-native (Android). I excel at creating and maintaining responsive web applicatons that offer users a smooth and dynamic experience. Along with being a developer, i'm a competitive programmer as well being Expert on Codeforces, 4* at Codechef and Knight at Leetcode. I'm also a team player who thrives in collaborating with cross functional teams to product outstanding web applications.
    </div>
    <div style={{ textAlign: 'center' }}>
      <img src={image2} className='aboutImg' alt="table" />
    </div>
  </section>

  {/*  About for larger screen sizes */}
  {/* fix its navigation */}
  <div className='aboutdiv' id='aboutSection2'>
        <p className=' container'><img src={image2} alt="Not Found" style={{ float: "left", width: "250px", height: "250px", marginLeft: "15px", marginRight: "50px",borderRadius:"20px" }} />
          <div style={{ color: 'blue',fontSize:"14px",fontFamily:"ExtraBold",fontWeight:"bolder" }}>
            ABOUT ME
          </div>
          <div style={{ fontSize: "15px" }}>
            <span style={{ fontFamily:"ExtraBold",fontWeight:"bolder" }}>A dedicated Fullstack Web Developer based of India
            </span>
            </div>
            <div style={{fontSize:"13px", marginTop:"20px",fontFamily:"Regular"}}>
              As a Fullstack web developer, I possess an arsenal of weapons including HTML, CSS, JS, MERN stack, Django and react-native (Android). I excel at creating and maintaining responsive web applicatons that offer users a smooth and dynamic experience. Along with being a developer, i'm a competitive programmer as well being Expert on Codeforces, 4* at Codechef and Knight at Leetcode. I'm also a team player who thrives in collaborating with cross functional teams to product outstanding web applications.
            </div>
        </p>
      </div>
      </>
)
}
