import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter,faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter, faFacebook, faGithub)
function Section(props) {
  return (
    <div className="text-center mb-10">
        <img className="w-36 h-36 rounded-lg ml-36" src={props.img} alt=''/>
        <h1 className="text-blue-700">{props.title1}</h1>
        <h2 className="text-gray-300">teacher in {props.title2}</h2>
        <p className="text-black">Far far away,behind the word<br/> mountains,far from the countries Vokalia <br/>and Consnnantia,there live the blind<br/> texts.</p>
        <div className="space-x-3 pt-4 ">
            <FontAwesomeIcon className='rounded=full bg-blue-700'  icon="fa-brands fa-twitter" />
            <FontAwesomeIcon className='rounded=full bg-blue-700' icon="fa-brands fa-facebook" />
            <FontAwesomeIcon className='rounded=full bg-blue-700'  icon="fa-brands fa-github" />
        </div>
    </div>
  )
}

export default Section