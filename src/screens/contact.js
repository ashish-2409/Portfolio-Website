import React from 'react'
import Emoji from '../components/emoji'

export default function contact() {
  return (
    <section id='contact' style={{ marginTop: "100px", width: "80%", textAlign: 'center', margin: 'auto' }}>
    <div style={{ fontSize: "1em", fontFamily: "ExtraBOld", color: "blue", width: "80%", textAlign: 'center', margin: 'auto' }}>
      CONTACT
      <div style={{ fontSize: "1em", color: "black", textAlign: 'center', margin: 'auto' }}>
        Don't be shy! Hit me up! <Emoji symbol="👇" />
      </div>
    </div>
    <ul style={{listStyleType:'none'}}>
      <li>
        <div style={{ marginTop: "30px" }}>
          Email : randomtext@gamil.com
        </div>
      </li>
      <li>
        <div>
          Contact Number : 9999999999
        </div>
      </li>
    </ul>
  </section>
)
}
