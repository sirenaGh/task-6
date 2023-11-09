import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter,faFacebook,faPinterest, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
library.add(faTwitter, faFacebook, faPinterest, faGithub, faInstagram, faHouse)
function Footer() {   
  return (
    <div className="flex space-x-24 bg-blue-700 bg-cover p-10 ">
      <div>
        <h2>About Us</h2>
        <p className="mt-5"> Far far away,behind the word <br/>mountains,far from the countries<br/> Vokalia and Consnnantia,there live<br/>the blind texts.</p>
        <h2 className="mt-8 ">Connect</h2>
        <div className="space-x-3 pt-4">
        <FontAwesomeIcon   icon="fa-solid fa-house" />
        <FontAwesomeIcon   icon="fa-brands fa-twitter" />
        <FontAwesomeIcon   icon="fa-brands fa-facebook" />
        <FontAwesomeIcon   icon="fa-brands fa-pinterest" />
        <FontAwesomeIcon   icon="fa-brands fa-github" />
        <FontAwesomeIcon   icon="fa-brands fa-instagram" />
        </div>
      </div>
      <div>
        <h2>Projects</h2>
        <p className="mt-5">Web Design<br/>HTML5<br/>CSS3<br/>jquery<br/>Bootstrap</p>
      </div>
      <div>
        <h2> Gallery</h2>
        <div className="grid grid-cols-3 gap-2 ">
          <img className="w-24" src="https://img.freepik.com/free-photo/unpleased-young-female-teacher-wearing-glasses-sits-table-with-school-tools-reading-book-classroom_141793-106326.jpg?w=360" alt=" " />
          <img className="w-24" src="https://img.freepik.com/premium-photo/young-teacher-working-school-classroom_488220-85682.jpg" alt=" "/>
          <img className="w-24" src="https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=" "/>
          <img className="w-24" src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg" alt=" "/>
          <img className="w-24" src="https://img.freepik.com/free-photo/thinking-looking-up-young-female-teacher-wearing-glasses-holding-pointer-sitting-desk-with-school-tools-classroom_141793-133710.jpg?w=2000" alt=" "/>
          <img className="w-24" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&w=1000&q=80" alt=" "/>
         
        </div>
      </div>
      <div>
        <h2>Contact</h2>
        <p className="mt-5">43 Raymouth Rd. Baltemoer,London<br/>3910<br/>+1(123)-456-7890<br/>+1(123)-456-7890<br/>info@mydomain.com</p>
      </div>

    </div>
  )
}

export default Footer