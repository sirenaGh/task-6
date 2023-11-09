import Link from 'next/link'
import React from 'react'  

function NavBar() {    
  return (
    <div className="mt-10"> 
    <nav>
        <ul className="flex m-10  font-semibold space-x-12 text-lg">
            <h1 className="mr-52 font-bold text-xl">Learner</h1>
          <Link to="./../layouts/Home.jsx">  <li>Home</li></Link>
            <li>Dropdown</li>
            <li>Our Stuff</li>
          <Link to="./../news/index.js">  <li>News</li></Link>
            <li>Gallery</li>
          <Link to="./../about/index.js">  <li>About</li></Link>
            <li>Contact</li>
            <button className=" text-white  font-normal transition ease-in-out delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-xl text-xs">ENROLL NOW</button>
         </ul>
    </nav> 
    </div>
   
  )
}

export default NavBar