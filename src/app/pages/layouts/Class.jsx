import React from 'react'

function Class(props) { 
  return (
    <div className="border-slate-100  border-2 border-solid  p-5 text-center my-10">
        <img className="w-12 rounded-full p-1 ml-40" src={props.pic} alt=''/> 
        <h2 className="text-blue-700">{props.header3}</h2>
        <p className="text-black">Far far away, behind the word mountains<br/>,far from the countries Vokalia and<br/> Consnnantia, there live the blind texts.</p>
    </div>
  )
}

export default Class