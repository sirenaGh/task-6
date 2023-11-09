import React from 'react' 
import pic9 from './../../../../public/img01.webp'
import pic01 from './../../../../public/img04.jpg'
import pic02 from './../../../../public/img08.jpg' 
import pic244 from './../../../../public/img08.jpg'
import pic344 from './../../../../public/344.jpg'
import BecomIn from '../layouts/BecomIn'
import Bestedu from '../layouts/BestEdu'
import WhyChoose from '../layouts/WhyChoose' 
import Section from '../layouts/Section'
function About() {
  return (
    <>
    <BecomIn/>
    <div>
        <h1 className="text-blue-700 font-bold text-center">Our Team</h1>
        <p className="text-black mt-5 text-center mb-10">Far far away,behind the word mountains,far from the countries Vokalia and<br/> Consnnantia,there live the blind texts.</p>
        <div className="grid grid-cols-3 gap-5">
            <Section title1="Mina Collins" title2="Math" img={pic9}/>
            <Section title1="Anderson Matthew" title2="Music" img={pic01}/>
            <Section title1="Cynthia Misso" title2="English" img={pic02}/>
        </div>
        <Bestedu/>
        <WhyChoose  pic24={pic244} pic34={pic344}/>
    </div>
    </>
  )
}

export default About