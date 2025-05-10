import React, { useEffect } from 'react'
import poster from "../assets/img/man2.jpg"
import gsap from 'gsap'
export const Home = () => {

  useEffect(()=>{
    gsap.fromTo(".heading",{
      opacity:0,x:-200,

    },{
      opacity:1,
      x:0,
      duration:1,
      ease:"power1.inOut"
    })
    gsap.fromTo(".para", 
      { width: "0", opacity: 0 },
      { width: "100%", opacity: 1, duration: 2, ease: "power1.inOut", delay: 1 }
    )
    gsap.fromTo(".para1", 
      { width: "0", opacity: 0 },
      { width: "100%", opacity: 1, duration: 2, ease: "power1.inOut", delay: 1 }
    )
    gsap.fromTo(".button",{
      opacity:0,y:40,

    },{
      opacity:1,
      y:0,
      duration:1,
      delay:2,
      ease:"sine.inOut"
    })
    gsap.fromTo(".img",{
      opacity:0,scale:0.5,

    },{
      opacity:1,
      scale:1,
      duration:1,
      delay:2,
      ease:"sine.inOut"
    })
  },[])
  return (
    <>
    <div id='home' className="w-full h-screen bg-black flex justify-around px-4 items-center ">
        <div className="max-[600px]:w-[400px]">
            <h1 className='text-[#FF0000] font-bold text-3xl md:text-6xl heading' >WHERE HARD
            </h1>
            <h1 className='text-white font-bold text-3xl md:text-6xl heading'>WORK MEETS</h1>
            <h1 className='text-white font-bold text-3xl md:text-6xl heading'>SUCCESS</h1>
        <p className='text-white max-[600px]:hidden font-semibold  text-lg py-2 para overflow-hidden whitespace-nowrap   border-white w-fit animate-pulse'>"Push Yourself , Because No One Else Is Going To Do It For You!"</p>
        <p className='text-white min-[600px]:hidden font-semibold  text-sm py-2 para1 overflow-hidden whitespace-nowrap   border-white w-fit animate-pulse'>"Push Yourself , Because <br/> No One Else Is Going <br/>To Do It For You!"</p>
 <a href="#about">
<button className='button bg-[#ff0000] mt-3 border border-transparent hover:bg-black hover:scale-125 hover:border-[#FF0000] transition duration-300 text-white font-semibold md:text-xl text-xs p-2 px-4 cursor-pointer rounded-md shadow-2xl'>Get Started</button>
 </a>
        </div>
        <div className="">
            <img src={poster} alt="" className='w-[450px] h-[450px]  mx-auto transition-transform duration-300 img' />
        </div>
    </div>
    </>
  )
}
