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
        </div>
    )
}
