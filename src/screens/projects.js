import React from 'react'
import { useState } from 'react'
import image2 from '../images/image2.jpg'
import image1 from '../images/image.jpg'
import github from '../images/github.png'

export default function Projects() {

    const images = {
        "image.jpg": image1,
        "image2.jpg": image2,
    }
    const [data, setData] = useState([
        {
            id: 1,
            title: "Food Delivery App",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, doloribus.",
            image: "image2.jpg",
            github: "https://github.com/ashish-2409/Food-Delivery-App",
            live: "",
            techUsed:[
                // 'Reactjs',
                'MERN Stack',
                // 'Nodejs'
            ]
        },
        {
            id: 2,
            title: "GameZone App",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, doloribus.",
            image: "image2.jpg",
            github: "https://github.com/ashish-2409/GameZone-app",
            live: "",
            techUsed:[
                'react-native',
                'android'
            ]
        },

    ]);

    return (
        <div id="projects">
            {
                data.map((e) => {
                    return (
                        <div className='projectdiv'>
                            <p className=' container'><img src={images[e.image]} alt="Not Found" className={
                                ((e.id)%2 ? "imageLeft":"imageRight")
                            } />
                                <div style={{ fontSize: "15px" }}>
                                    <span style={{ fontWeight: "bold" }}>{e.title}
                                    </span>
                                </div>
                                <div style={{ fontSize: "13px", marginTop: "20px" }}>
                                    {e.desc}
                                </div>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    {
                                        e.techUsed.map((tech)=>{
                                            return (
                                                <span style={{fontSize:"14px",fontWeight:"bold",padding:"10px"}}>
                                                    {
                                                        tech
                                                    }
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <a href={e.github} target='__blank' style={{textDecoration:"none",color:"black"}}> <span style={{fontSize:"12px"}}>Code Here</span><img src={github} alt="" style={{height:"30px"}}/></a>
                                </div>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
