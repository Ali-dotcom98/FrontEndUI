import React from 'react'
import Slider from "react-slick";
import {testimonials} from "./source"
import { Star } from "lucide-react";

import {useTheme} from "../Context/ThemeContext"

const Reviews = () => {
  const {theme ,toggleTheme} = useTheme()
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: "0px",
  
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    draggable: true,  
    swipe: true,   
  };
  return (
    
    <>
      <div  id='testimonials' className={ `h-[80vh]  px-10 font-poppins ${theme ==="light"?"bg-white text-black":"bg-dark-bg-primary text-white"} `}>
        
        <div className='flex flex-row py-16 justify-center  w-full h-full px-10 translate-y-20'>
          <div className='w-[40%] flex flex-col gap-4'>
            <h1 className='text-primary-or font-medium text-xl' >Client Testimonies</h1>
            <h1 className='text-3xl font-medium' >Building with Excellence</h1>
            <p className='leading-relaxed font-medium' >Meet the experts who bring excellence and innovation to every project. Get to know our dedicated team making your vision a reality.</p>
            <button className='w-fit text-lg tracking-wide flex  py-3 px-6 rounded-md items-center gap-3 text-white bg-primary-or hover:bg-primary-or-acc hover:-translate-y-1 transition-all ease-in duration-100'>
              Contact Us
            </button>   
          </div>
            <div className='w-[60%] flex flex-col gap-3'>
            <Slider {...settings} className=''>
            {
              testimonials.map((data) => (
                <div className={`mx-3 px-4 py-6 h-[40vh] rounded-lg shadow-md ${theme ==="light"?"bg-white text-black":"bg-dark-bg-secondary text-white"} `}>
                  <div className='flex flex-row gap-2 items-start'>
                    <img src={data.image} className='size-16 rounded-full' alt="" />
                    <div>
                        <h1 className='font-medium'>{data.name}</h1>
                        <div className='flex flex-row gap-1 scale-75 -translate-x-4'>
                        <Star className='text-primary-or ' fill='#ff4400' />
                        <Star className='text-primary-or ' fill='#ff4400' />
                        <Star className='text-primary-or ' fill='#ff4400' />
                        <Star className='text-primary-or ' fill='#ff4400' />
                        <Star className='text-primary-or ' fill='#ff4400' />
                        </div>
                    </div>

                  </div>
                  <p className='mt-4 text-text-muted font-medium'>{data.review}</p>
                </div>
              ))
      }

            </Slider>
            </div>
        </div>

      </div>
    </>
  )
}

export default Reviews