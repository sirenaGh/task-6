import React from 'react'

function Card3(props) { 
  return (
    
<div className="max-w-sm bg-white border border-gray-200 mx-10 mb-12  drop-shadow-2xl dark:border-gray-700">
    <a href="#">
        <img   src={props.picc} alt=" " />
    </a>
    <div className="p-5">
        <h2 className="mb-2  tracking-tight text-blue-700 dark:text-white">43 lesson</h2>
        <h1 className="mb-3 font-normal text-gray-700 dark:text-gray-400">Education Program Title</h1>
        <p className="text-gray-400 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat nostrum </p>
        <p className="text-black mt-14 ">$87.00 <a className="float-right text-blue-700" href="#">Learn More</a></p>
           
    </div>
</div>

  )
}

export default Card3