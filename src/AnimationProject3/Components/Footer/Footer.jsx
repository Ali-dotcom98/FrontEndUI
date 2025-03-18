import React from 'react'
import back from "../../assets/background.jpg"
import {footer} from "../source"
import {useTheme} from "../../Context/ThemeContext"
import logo from "../../Logo/favicon.ico"

const Footer = () => {
    const {theme ,toggleTheme} = useTheme()
  return (
    <>
        <div className={`relative h-[80vh] overflow-hidden font-poppins ${theme ==="light"?"bg-white text-black":"bg-dark-bg-primary text-white"} `}>
            <div className='absolute w-full opacity-15'>
                <img src={back} alt="" />

            </div>
           <div className=' flex flex-row items-center gap-24 translate-x-36 translate-y-10 py-20 '>
                <div className='w-[20%]  space-y-4'> 
                    <div className='text-3xl flex items-center gap-1'>
                                    <img className='size-10' src={logo} alt="" />
                                    <h1>Gem<span className='nav bg-gradient-to-b bg-primary-or font-semibold bg-clip-text text-transparent
                                    '>Build</span></h1>
                                </div>
                    <p>Our mission is to build lasting spaces that inspire and uplift, combining quality craftsmanship with innovative solutions to meet
                    the evolving needs of our clients and communities.</p>
                </div>
                <div className=''>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            footer.map((data)=>(
                                <div className='flex flex-col gap-4'>
                                    <h1 className='text-xl font-medium'> {data.title}</h1>
                                    <div className='flex flex-col gap-4'>
                                        {
                                            data.routes.map((data)=>(
                                                <div>
                                                    {
                                                        data.name
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
            <div className='w-full  py-3 absolute bottom-0 z-30'>
                <div className='text-sm flex flex-row items-center justify-center'>
                    Copyright Confix - All right reserved 
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer