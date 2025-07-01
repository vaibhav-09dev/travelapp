'use client'
import  {React, useState,useEffect } from 'react'
import Slider from '@/components/Slider'
import axios from 'axios'
import Data from '@/components/Data'

const Context = () => {
    const [review, setreview] = useState([])
    
    const fetchall=async()=>{
        try {
            const res=await axios.get('https://www.wellcometours.com/api/Allreview')
            setreview(res.data.alluser)
            
            
        } catch (error) {
            console.log(error)
            
        }
       
    }
    useEffect(() => {
        fetchall();
      
    
      
    }, [])
  return (
    <div>
        <Slider review={review}/>
    </div>
  )
}

export default Context