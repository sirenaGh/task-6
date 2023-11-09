import React from 'react'

function WhyChoose({pic34} ) {    
  return (
    <div className="flex space-x-8 mb-8 ml-60 mt-8">
        <img className="w-96 h-96" src={pic34} alt=''/>
        <div>
            <h1 className="text-blue-700">Why Choose Us</h1>
            <p className="text-black">Far far away, behind the word mountains,far from<br/> the countries Vokalia and Consnnantia, there live<br/> the blind texts.</p>
            <p className="border-blue-700 bg-blue-700 p-2 my-4">- Good Teachers and Stuffs</p>
            <p className="text-black my-4">Far far away, behind the word mountains,far from<br/> the countries Vokalia and Consnnantia, there live<br/> the blind texts.<br/><br/>Separated they live in BookMarksgrove right at the <br/>cost of the semenatics, a large language ocean</p>
            <p className="text-black my-6">+ We Value Good Charecters<br/>+ Your Children Are Safe</p>
        </div>
    </div>
  )
}

export default WhyChoose