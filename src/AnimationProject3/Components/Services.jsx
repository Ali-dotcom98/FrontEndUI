import React, { useRef } from 'react'
import {sketch} from "../assets/index"
import {services} from "./source"
import {useTheme} from "../Context/ThemeContext"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



const Services = () => {

  const box = useRef()
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",  
        start: "top 80%",  
        end: "bottom 20%", 
        margin:true
      }
    });
    tl.from(".head1", { y: -100, opacity: 0, duration: 1 } , )
    .from(".img", { x:50, opacity: 0, duration: 1 } , "-=0.2")
    .from(".para1", { y: -50, opacity: 0, duration: 1 } , "-=0.2")
    .from(box.current.children,{y:100 ,opacity:0 , stagger:0.2, duration:1})
    

  }, []);


  const {theme ,toggleTheme} = useTheme()
  return (
    <>
    <div id='services' className={` section relative h-[110vh] font-poppins ${theme ==="light"?"bg-white text-black":"bg-dark-bg-primary text-white"} `}>
      <div className='z-0 h-full absolute inset-0  overflow-hidden'>
        <img  src={sketch}  alt="" />
        <div className={`absolute inset-0  bg-opacity-90 ${theme === "light"?"bg-white":"bg-dark-bg-primary"}`}></div>
        </div>
      <div className='relative z-20 px-10 pt-10'>
        <div className='flex flex-row items-center translate-x-9'>
          <div className='flex flex-col gap-5'>
            <h1  className='head1 text-3xl font-medium'>Building Dreams, Crafting Reality</h1>
            <p className='para1 leading-relaxed font-medium' >At GemBuild, we are driven by a passion for creating outstanding construction projects that stand the test of time. Whether you’re envisioning a luxury residential home, a cutting-edge commercial space, or an industrial facility, we bring expertise, innovation, and attention to detail to every project.</p>
            <button className='w-fit text-lg tracking-wide flex  py-3 px-6 rounded-md items-center gap-3 text-white bg-primary-or hover:bg-primary-or-acc hover:-translate-y-1 transition-all ease-in duration-100'>
              Contact Us
            </button>        
          </div>
           
          <div className=''>
            <img src={sketch} className='scale-75 img' alt="" />
          </div>
        </div>
        <div ref={box} className=' grid grid-cols-3 px-10 gap-6 '>
          {
            services.map((data)=>(
              <div className={`${theme ==="light"?"bg-white text-black":"bg-dark-bg-secondary text-white"} flex flex-col shadow-2xl py-8 px-5 rounded-xl gap-3`}>
                <div className='flex flex-row items-center gap-2'>
                  <p className='text-xl p-2 rounded-full border border-primary-or'>{<data.icon/>}</p>
                  <h1 className='font-medium'>{data.title}</h1>
                </div>
                <p className='text-sm'>{data.description}</p>
                <button className='mt-2 border w-fit px-4 py-2 rounded-lg text-primary-or-acc font-medium border-primary-or'>
                  Reach out
                </button>

              </div>

            ))
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Services