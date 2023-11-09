import React from 'react'
import Class from './Class'
import pic11 from './../../../../public/77.png'
import pic22 from './../../../../public/22.png'
import pic33 from './../../../../public/33.png'
import pic44 from './../../../../public/44.png'
import pic55 from './../../../../public/55.png'
import pic66 from './../../../../public/66.png'
function Bestedu() {   
  return (
    <div className="mx-6">
            <h1>We Have Best Education</h1>
            <p>Far far away, behind the word mountains,far from the countries Vokalia and<br/> Consnnantia, there live the blind texts.</p>
            <div className="grid grid-cols-3 gap-4">
                <Class header3="Music Class" pic={pic11}  />
                <Class header3="Math Class" pic={pic22} />
                <Class header3="English Class" pic={pic33} />
                <Class header3="Reading For Kids" pic={pic44} />
                <Class header3="History Class" pic={pic55} />
                <Class header3="Music" pic={pic66} />
            </div>
        </div>
  )
}

export default Bestedu