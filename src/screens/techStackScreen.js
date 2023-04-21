import React from 'react'
import { techStack } from '../data'
export default function TechStackScreen() {
    return (
        <div>
            <section id="techStack">
                <h4>
                    Tech Stack
                </h4>
                <div className="grid">
                    {
                        techStack.map((e) => {
                            return (
                                <img src={e.img} alt={e.title} className='techImg' />
                            )
                        })
                    }
                </div>
            </section>
            {/* for larger screens */}
            <section id="techStack2">
                <h4>
                    Tech Stack
                </h4>
                <div className="grid2">
                    <img src={techStack[0].img} alt={techStack[0].title} className='techImg2' style={{gridColumn:'3'}}/>
                    <img src={techStack[1].img} alt={techStack[1].title} className='techImg2' />
                    <img src={techStack[2].img} alt={techStack[2].title} className='techImg2' />
                    <img src={techStack[3].img} alt={techStack[3].title} className='techImg2' />
                    <img src={techStack[4].img} alt={techStack[4].title} className='techImg2' />
                    <img src={techStack[5].img} alt={techStack[5].title} className='techImg2' />
                </div>
            </section>
        </div>
    )
}
