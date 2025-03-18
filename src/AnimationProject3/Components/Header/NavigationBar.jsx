import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll';
import {navigations} from "../source"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import {useTheme} from "../../Context/ThemeContext"
console.log(navigations);
import logo from "../../Logo/favicon.ico"


const NavigationBar = () => {
    const {theme ,toggleTheme} = useTheme()
    const [fixedit, setfixedit] = useState(false)
    const container = useRef()
    const handleControl =()=>{
        const postion = window.scrollY
        console.log(postion);
        
        if(postion>110)
        {
            setfixedit(true)
        }
        else if (postion<50)
        {   
            setfixedit(false)
        }


    }
    useEffect(() => {
        console.log(theme);
        
        if (fixedit) {
            gsap.fromTo(
                container.current,
                { y: -150, },
                { y: 0, top:0}
            );
        }
    }, [fixedit]);
    useEffect(()=>{
        window.addEventListener("scroll",handleControl)
        return ()=> window.removeEventListener("scroll", handleControl)

    },[])

    
    
  return (
    <>
        <div ref={container} className={`${fixedit==true ? 'fixed top-0 left-0 w-full z-50':'relative'} z-30   ${theme ==="light"?"bg-white text-black":"bg-dark-bg-primary text-white"} flex flex-row items-center justify-between px-4 font-poppins overflow-x-hidden`}>
            <div className='text-3xl flex items-center gap-1'>
                <img className='size-10' src={logo} alt="" />
                <h1>Gem<span className='nav bg-gradient-to-b bg-primary-or font-semibold bg-clip-text text-transparent
                '>Build</span></h1>
            </div>
            <div className='flex flex-row gap-28 items-center   '>
                <div className='flex flex-row gap-2 scale-90'>
                    <div className='border p-3 rounded-full border-zinc-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </div>
                    <div className='border p-3 rounded-full border-zinc-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </div>
                    <div className='border p-3 rounded-full border-zinc-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                    <div className='border p-3 rounded-full border-zinc-400'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                    </div>
                </div>
                <div className='flex gap-5' >
                    {

                        navigations.map((data, index)=>(
                        <Link to={data.to} 
                            smooth={true}
                            duration={500}
                            hashSpy={true}  
                            isDynamic={true} 
                            spy={true}
                            activeClass="border-b-2 border-primary !text-primary-or"
                            offset={data.offset}
                            key={index}
                            className=' cursor-pointer pt-7 pb-5 hover:text-primary-or border-primary-or  font-medium tracking-wider'
                        >
                        {
                            <p className='font-sans'>{data.label}</p>
                        }
                        </Link>
                        ))
                    }
                </div>
                
            </div>
            <div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={toggleTheme}
                    // checked={themeMode=== "dark"}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-or"></div>
    
            </label>

            </div>

        </div>
        
    </>
  )
}

export default NavigationBar