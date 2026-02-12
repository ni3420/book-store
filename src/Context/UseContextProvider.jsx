import React, { useEffect, useState } from 'react'
import { UseContextApi } from './UseContextApi'

const UseContextProvider = ({children}) => {
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(true)
    const [like,setlike]=useState(()=>{
        const count=localStorage.getItem("count")
        return Number(count) || 0;
    })
    const [user,setuser]=useState(()=>{
        const userData=localStorage.getItem("user")
        return JSON.parse(userData) || null;
    })
    const [watch,setwatch]=useState(()=>{
        const user=localStorage.getItem("Watch")
        return JSON.parse(user) || []
    })
    useEffect(()=>{
        localStorage.setItem("Watch",JSON.stringify(watch))

    },[watch])
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(user))
    },[user])
    useEffect(()=>{
        const getData=async()=>{
            try {
                const res=await fetch(`https://gutendex.com/books/`);
                const result=await res.json()
                setdata(result)
            } catch (error) {
                console.log(error)
                
            }finally{
                setloading(false)
            }
        }
        getData()
    },[])

    useEffect(()=>{
        localStorage.setItem("count",like)
    },[like])

    const inc=()=>{
        
        setlike(pre=>pre+1)
    }
    const dec=()=>{
        if(like<=0)
        {
            setlike(0)
        }
        setlike(pre=>pre-1)
    }



    if(loading)
    {
        return <div className='flex justify-center items-center h-screen '>
            <img src={"https://media.tenor.com/mV5Kisugr5AAAAAm/huh-question.webp"} alt="" />
        </div>
    }


  return (
<UseContextApi.Provider value={{inc,dec,data,like,setlike,setuser,user,watch,setwatch}}>
    {children}
</UseContextApi.Provider>
  )
}

export default UseContextProvider