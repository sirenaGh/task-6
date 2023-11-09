import React  from 'react'  
import NavBar from './NavBar'
import Footer from './Footer'
import { useRouter } from "next/router";
import Page from '@/app/page';
function Home({Children}) {
  const router = useRouter();
  return (
    <React.Fragment>
    <div className="bg-local bg-no-repeat bg-cover"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/top-view-circular-frame-with-supplies_23-2148565104.jpg?w=2000')",
    }}>
      <NavBar/> 
      <div className="text-center mt-40">
      <h1 className="font-bold m-3 text-lg">Education is the Mother of<br/>Leadership</h1>
      <p>Another free template by Untree.co. Far far away,<br/>behind the word mountains,far from the countries<br/>Vokalia and Consnnantia,there live.</p>
     <button onClick={"./../courses/index.js"} className="mt-10 text-white  font-normal transition ease-in-out delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-xl text-xs mb-48">EXPLORE COURSES</button>
      </div>
      </div>
      {Children} 
      <div>
        {router.query.page && <Page page={router.query.page} />} 
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default Home