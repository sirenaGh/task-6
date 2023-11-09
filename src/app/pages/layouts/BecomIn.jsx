import React from 'react'
import pic7 from './../../../../public/img2.jpg'
function BecomIn() {  
  return (
    <div className="space-x-80 flex bg-amber-50  ">
    <div className="mt-8 ml-40 ">
        <h1 className="text-blue-700 font-bold">Become an Instructor</h1>
        <p className="text-black">Far far away,<br/>behind the word mountains,far<br/> from the countries Vokalia and Consnnantia,<br/>there live the blind texts.Separted they live.</p>
        <p className="text-black mt-7">- Behind the word Mountains.<br/>- Far far away Mountains.<br/>- Large language Ocean.</p>
        <button className=" mt-6 text-white  font-normal transition ease-in-out delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-xl text-xs">GET STARTED</button>
    </div>
    <img className="w-96 h-96 mb-24  drop-shadow-3xl -mt-10" src={pic7} alt=''/>
    </div>
  )
}

export default BecomIn