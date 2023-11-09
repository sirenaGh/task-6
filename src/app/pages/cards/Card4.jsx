import React from 'react'

function Card4(props) { 
  return (
    <div className="card mb-12  drop-shadow-2xl ml-8 p-10" >
            <div className="flex flex-col items-center bg-white border border-gray-200  shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal text-center">
                  <h1 className="mb-2 text-2xl  tracking-tight text-blue-700 dark:text-white">{props.title22}</h1>
                  <h1 className="mb-3  font-bold text-blue-700">$ {props.title33} /month</h1>
                  <p className="text-black my-5">Far far away, behind the word <br/>mountains,far from the countries <br/>Vokalia and Consnnantia, there live<br/> the blind texts.</p>
                  <button className=" text-white rounded-full w-28 ml-16  font-normal transition ease-in-out delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3  text-xs">GET STARTED</button></div>
              </div>
            </div>
  )
}

export default Card4