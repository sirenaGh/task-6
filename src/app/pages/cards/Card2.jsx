import React from 'react'

function Card2(props) { 
  return (
    <div className="card mb-3 h-40  w-64  drop-shadow-2xl ml-8" >
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover rounded-full m-3 w-16 " src={props.img2} alt=" "/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                  <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title22}</h1>
                  <h2 className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.title33}</h2>
              </div>
            </a>
</div> 
  )
}

export default Card2