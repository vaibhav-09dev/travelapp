'use client'
import  {React, useState,useEffect } from 'react'
import Users from '@/components/Users'
import axios from 'axios'
import Data from '@/components/Data'

const Context = () => {
    const [users, setusers] = useState([])
    
    const fetchall=async()=>{
        try {
            const res=await axios.get('https://travelapp-seven-delta.vercel.app/api/All')
            setusers(res.data.alluser)
            
            
        } catch (error) {
            console.log(error)
            
        }
       
    }
    useEffect(() => {
        fetchall();
      
    
      
    }, [])
  return (
    <div>
        <Users users={users}/>
    </div>
  )
}

export default Context