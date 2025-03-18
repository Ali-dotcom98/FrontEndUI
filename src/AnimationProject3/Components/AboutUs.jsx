import React, { useState , useEffect ,useRef} from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Check } from "lucide-react";

import {about ,} from "../assets/index"
import {keypoints ,Achieve} from "./source"
import back from "../assets/background.jpg"
import Odometer from 'react-odometerjs';
import "./odometer-theme-default.css"

import {useTheme} from "../Context/ThemeContext"
import { useGSAP } from "@gsap/react";




const AboutUs = () => {
  const {theme ,toggleTheme} = useTheme()

  const [box1, setbox1] = useState(0)
  const [box2, setbox2] = useState(0)
  const [box3, setbox3] =useState(0)


  const box11 = useRef()
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",  
        start: "top 40%",  
        end: "bottom 60%", 
        
      }
    });
    tl.from(".box2 > div", {y:100 , opacity :0 , duration :1 , stagger:0.5})
    // tl.from(".head1", { y: -100, opacity: 0, duration: 1 } , )
    // .from(".img", { x:50, opacity: 0, duration: 1 } , "-=0.2")
    // .from(".para1", { y: -50, opacity: 0, duration: 1 } , "-=0.2")
    // .from(box.current.children,{y:100 ,opacity:0 , stagger:0.2, duration:1})
    

  }, []);



  useEffect(()=>{
      const timeOutID = setTimeout(()=>{
        setbox1(Achieve[0].Num)
        setbox2(Achieve[1].Num)
        setbox3(Achieve[2].Num)
      },1000);
      return()=>clearTimeout(timeOutID);
    },[])
  


  return (
    <>
      <section id='about' className={`section1 ${theme ==="light"?"bg-white text-black":"bg-dark-bg-secondary text-white"} `}>
        <div className={`flex flex-row font-poppins px-16 pt-32 pb-16 ${theme ==="light"?"bg-white text-black":"bg-dark-bg-secondary text-white"} `}>
          <div className='w-[30%]  px-5 '>
              <img src={about}  alt="" className='w-full h-full  rounded-xl  shadow-2xl' />
          </div>
          <div className='w-[70%] '>
            <div className='flex flex-col gap-3'>
                <h1 className='text-primary-or font-medium text-xl'>About Us</h1>
                <h2 className='text-lg font-medium'>Creating Spaces. Building Futures. </h2>
                <p>At GemBuild, we transform visions into reality with precision and innovation. Specializing in residential, commercial, and industrial construction, we bring years of expertise and a commitment to excellence to every project. Our team is dedicated to delivering results that inspire, function, and endure.</p>
            </div>
            <div>
              <h1 className='text-lg font-medium py-2'>What we Stand For</h1>
              
                <div className='box2'>
                    {
                      keypoints.map((data)=>(
                        <div className='flex gap-1 pr-5 mb-4 items-start'> 
                          <p className='border border-primary-or-acc font-bold scale-75 w-fit rounded-full p-3'><Check /></p>
                          <div>
                            <h1 className='font-medium'>{data.title}</h1>
                            <p className='text-text-muted font-medium'>{data.description}</p>
                          </div>
                        </div>
                        
                      ))
                    }                

                </div>
              
            </div>

          </div>

        </div>
       <div className=' mx-10 pb-20'>
          <div className='relative flex flex-row font-poppins  px-8 items-center justify-between  py-12 rounded-2xl shadow-2xl '>
              <div className='relative z-20 flex flex-col gap-2'>
                <h1 className='text-primary-or font-medium'>Our Achievements</h1>
                <p className='text-2xl font-medium'>Transforming Visions Into Reality</p>
              </div>
              <div className='relative z-20 grid grid-cols-3 gap-5 '>
                  {
                    Achieve.map((data , index)=>(
                      <div className='flex flex-col gap-1 font-medium'>
                        <h1 >{data.title}</h1>
                        <p className='text-4xl py-1 flex flex-row gap-2'>
                          
                            <Odometer value={index === 0 ? box1 : index === 1 ? box2 : box3}  format="d" className="odometer" />
                            <span>{data.sign}</span>
                        
                        </p>
                        <p>{data.description}</p>
                      </div>
                    ))
                  }
              </div>
              <div className='absolute z-0 rounded-2xl inset-0 overflow-y-hidden w-full'>
                <img src={back} className='w-full rounded-2xl' alt="" />
                <div className={`absolute inset-0  bg-opacity-90 ${theme === "light"?"bg-white":"bg-dark-bg-primary"}`}></div>

              </div>

          </div>
       </div>

      </section>
    </>
  )
}

export default AboutUs