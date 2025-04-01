"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import React from 'react'
import wp from "../../public/WhatsApp.svg.png"

const Data = ({users=[]} ) => {
  useEffect(() => {
    const handlescroll=(  )=>{
      const whatsappLinkElement= document.querySelector(".whatsapp-link")
      if(window.scrollY>100){
        whatsappLinkElement?.classList.add("visible")

      }
      else{
        whatsappLinkElement?.classList.remove("visible")

      }
    }
    window.addEventListener("scroll",handlescroll)
    return()=>{
      window.removeEventListener("scroll",handlescroll)

    }
    
  
    
  }, [])
  
  return (
    <div className=''>
        
      <a href={`https://wa.me/9811600075?text=hello`} target='blank' className='whatsapp-link relative' rel='noreferrer noopener'>
       <span className='absolute left-[7px] top-[7px] -z-50 size-10 '>
        <span className='flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75 '></span>

       </span>
       <Image src={wp} width={40} height={40} className=' whatsapp-icon z-50  ' alt='wp'/>
                    
        </a>
              

    </div>
  )
}


export default Data