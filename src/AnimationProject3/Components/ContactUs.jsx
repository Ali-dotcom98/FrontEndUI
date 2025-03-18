import React from 'react'
 

import {useTheme} from "../Context/ThemeContext"


const ContactUs = () => {
  const {theme ,toggleTheme} = useTheme()
  return (
    <>
  <section id='contact' className={`h-fit pb-20 relative ${theme ==="light"?"bg-white text-black":"bg-dark-bg-primary text-white"}`}>
        <div className='z-0 w-full absolute inset-0 opacity-15'>
            <img src='' alt="" />
        </div>
        <div className=' flex items-center justify-center md:px-10 py-5  font-poppins '>
            
            <div className=' md:w-[90%] w-full  h-fit md:h-screen grid grid-cols-1 md:grid-cols-2 px-10 py-24'>
                <div className='z-10 grid grid-rows-3 md:px-5 gap-2 mt-5 md:mt-0  '>
                  <div className={ `${theme ==="light"?"bg-white text-black":"bg-dark-bg-secondary text-white"} rounded-2xl border border-zinc-400 flex flex-col items-center justify-center gap-3 p-5 md:p-0`}>
                    <h1 className='font-bold'>Email</h1>
                    <p>ali12345.as@gmail.com</p>
                    <button className='px-3 py-2 text-white bg-primary-or  rounded-md'>
                        Send Now
                      </button>
                  </div>
                  <div className={ `${theme ==="light"?"bg-white text-black":"bg-dark-bg-secondary text-white"} rounded-2xl border border-zinc-400 flex flex-col items-center justify-center gap-3 p-5 md:p-0`}>
                    <h1 className='font-bold'>Email</h1>
                    <p>ali12345.as@gmail.com</p>
                    <button className='px-3 py-2 bg-primary-or  text-white rounded-md'>
                        Send Now
                      </button>
                  </div>
                  <div className={ `${theme ==="light"?"bg-white text-black":"bg-dark-bg-secondary text-white"} rounded-2xl border border-zinc-400 flex flex-col items-center justify-center gap-3 p-5 md:p-0`}>
                    <h1 className='font-bold'>Email</h1>
                    <p>ali12345.as@gmail.com</p>
                    <button className='px-3 py-2 bg-primary-or  text-white rounded-md'>
                        Send Now
                      </button>
                  </div>
                </div>
                <div className={`p-5 rounded-2xl border border-zinc-400  ${theme ==="light"?"bg-white text-black":"bg-dark-bg-secondary text-white"}`}>
                    <div className='z-10 flex flex-col items-start justify-start gap-2'>
                    <h1 className='mt-3 flex gap-3  text-2xl md:text-3xl leading-tight font-medium'>
                        
                        <span className=''>Get in Touch</span>
                    </h1>
                    <p className='text-zinc-600 text-start'>
                    Have a project in mind or need expert advice? We're here to
                    help! Reach out to our team for personalized consultations, inquiries, or to start your next big project today.
                    </p>
                    </div>
                    <form action="">
                      <div className=' relative z-10 flex flex-col md:flex-row gap-3 mt-5'>
                        <div className='w-full'>
                       <input 
                        className={`p-2 border border-zinc-500 rounded-md  focus:outline-none focus:ring-2 focus:ring-primary-or  ${theme ==="light"?"bg-white text-black placeholder-gray-700":"bg-dark-bg-primary text-white placeholder-white"} `} 
                        type="text" 
                        placeholder="FirstName"
                        />


                        </div>
                        <div className='w-full'>
                        <input 
                        className={`p-2 border border-zinc-500 rounded-md  focus:outline-none focus:ring-2 focus:ring-primary-or  ${theme ==="light"?"bg-white text-black placeholder-gray-700":"bg-dark-bg-primary text-white placeholder-white"} `} 
                        type="text" 
                          placeholder="LastName"
                        />

                        </div>
                        
                      </div>
                      <div className='relative z-10  flex flex-col md:flex-row gap-3 mt-5'>
                        <div className='w-full'>
                        <input 
                        className={`p-2 border border-zinc-500 rounded-md  focus:outline-none focus:ring-2 focus:ring-primary-or  ${theme ==="light"?"bg-white text-black placeholder-gray-700":"bg-dark-bg-primary text-white placeholder-white"} `} 
                        type="text" 
                          placeholder="Email"
                        />

                        </div>
                        <div className='w-full'>
                        <input 
                        className={`p-2 border border-zinc-500 rounded-md  focus:outline-none focus:ring-2 focus:ring-primary-or  ${theme ==="light"?"bg-white text-black placeholder-gray-700":"bg-dark-bg-primary text-white placeholder-white"} `} 
                        type="text" 
                          placeholder="Phone Number"
                        />

                        </div>
                        
                        
                      </div>
                      <div>
                          <textarea 
                          className={`relative z-10  p-2 border border-zinc-500 rounded-md  focus:outline-none focus:ring-2 focus:ring-primary-or placeholder-gray-700 w-full h-36 mt-5  resize-none ${theme ==="light"?"bg-white text-black placeholder-gray-700":"bg-dark-bg-primary text-white placeholder-white"} `} placeholder='Message' name="" id="" >
                            
                          </textarea>
                        </div>
                      <button className='relative z-10  px-3 py-2 bg-primary-or mt-5 text-white rounded-md w-full'>
                        Send Now
                      </button>
                    </form>
                </div>
                
            </div>
    
          </div>


    </section>
    </>
  )
}

export default ContactUs