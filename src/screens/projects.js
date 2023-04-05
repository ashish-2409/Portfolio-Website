import React from 'react'
import { useState } from 'react'
import image2 from '../images/image2.jpg'
import image1 from '../images/image.jpg'
import github from '../images/github.png'
import gamezone from '../images/gamezone.png'
import gofood from '../images/food.png'

export default function Projects() {

    const images = {
        "image.jpg": image1,
        "image2.jpg": image2,
        "gamezone.png":gamezone,
        "food.png":gofood
    }
    const [data, setData] = useState([
        {
            id: 1,
            title: "Food Delivery App",
            desc: "It is a responsive food delivery application based on MERN stack. Here, a user can register/login and the make use of the dynamic data to add food items to their cart. Various authentications are provided using tools such as JWT etc.",
            image: "food.png",
            github: "https://github.com/ashish-2409/Food-Delivery-App",
            live: "",
            techUsed:[
                'Reactjs',
                'MongoDB',
                'Nodejs',
            ]
        },
        {
            id: 2,
            title: "GameZone App",
            desc: "It is a review logging, cross platform application created using react-native. Here a user can add new reviews and then delete them easily. Other modules such as Formik and yup are used for forms and validations. Being cross platform, the same code can be used to run on android, ios and web platforms.", 
            image: "gamezone.png",
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
            <div className='container' style={{ fontSize:"13.5px", width:"700px",alignContent:"center", color:"blue", fontFamily:"ExtraBold",fontWeight:"bolder", marginTop:"90px"}}>
                PROJECTS
                <div style={{fontSize:"18px", color:"black",fontFamily:"ExtraBold",fontWeight:"bolder"}}>
                    Each project is a unique piece of development
                </div>
            </div>
            {
                data.map((e) => {
                    return (
                        <div className='projectdiv'>
                            <p className=' container'><img src={images[e.image]} alt="Not Found" className={
                                ((e.id)%2 ? "imageLeft":"imageRight")
                            } />
                                <div style={{ fontSize: "15px",fontFamily:"ExtraBold",fontWeight:"bolder" }}>
                                    <span style={{ fontWeight: "bold" }}>{e.title}
                                    </span>
                                </div>
                                <div style={{ fontSize: "13px", marginTop: "20px",fontFamily:"Regular" }}>
                                    {e.desc}
                                </div>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    {
                                        e.techUsed.map((tech)=>{
                                            return (
                                                <span style={{fontSize:"14px",fontFamily:"ExtraBold",fontWeight:"bolder",padding:"10px"}}>
                                                    {
                                                        tech
                                                    }
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <a href={e.github} target='__blank' style={{textDecoration:"none",color:"black"}}> <span style={{fontSize:"12px",fontFamily:"Bold",fontWeight:"bold"}}>Code Here</span><img src={github} alt="" style={{height:"30px"}}/></a>
                                </div>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
