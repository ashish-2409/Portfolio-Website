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
    <a href={codingProfiles[0].link}  style={{gridColumn:'3'}}><img src={codingProfiles[0].img} className='profileImg' alt={codingProfiles[0].title} /></a>
    <a href={codingProfiles[1].link}><img src={codingProfiles[1].img} className='profileImg' alt={codingProfiles[1].title} /></a>
    <a href={codingProfiles[2].link}><img src={codingProfiles[2].img} className='profileImg' alt={codingProfiles[2].title} /></a>
    <a href={codingProfiles[3].link}><img src={codingProfiles[3].img} className='profileImg' alt={codingProfiles[3].title} /></a>
    <a href={codingProfiles[4].link}><img src={codingProfiles[4].img} className='profileImg' alt={codingProfiles[4].title} /></a>
        </div>
      </section>
    </div>
  )
}
