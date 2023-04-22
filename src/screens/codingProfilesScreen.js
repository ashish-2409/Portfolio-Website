import React from 'react'
import { codingProfiles } from '../data'
export default function codingProfilesScreen() {
  return (
    <div>
        <section id="codingProfiles">
        <h4>
          Coding Profiles
        </h4>
        <div className="grid5col">
          {
            codingProfiles.map((e) => {
              return (
                <a href={e.link}><img src={e.img} className='profileImg' alt={e.title} /></a>
              )
            })
          }
        </div>
      </section>
          {/* for larger screens */}
      <section id="codingProfiles2">
        <h4>
          Coding Profiles
        </h4>
        <div className="grid5col2">
          {/* Dummy div tag */}
          <div style={{gridColumn:'2'}}></div>
          {
            codingProfiles.map((e) => {
              return (
                <a href={e.link}><img src={e.img} className='profileImg' alt={e.title} /></a>
              )
            })
          }
        </div> 
      </section>
    </div>
  )
}
