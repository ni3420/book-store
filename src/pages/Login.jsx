import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseContextApi } from '../Context/UseContextApi'

const Login = () => {
    const navigate=useNavigate()
    const [Email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const {setuser,user}=useContext(UseContextApi)
    useEffect(()=>{
        if(user)
        {
            navigate("/")
        }
    },[user,navigate])
    const handle=()=>{
        const userdata={
            email:Email,
            password:password
        }
        setuser(userdata)
        navigate("/")
        
    }
    
  return (
    <div className='h-screen text-centerp-2 flex justify-center '>
        <div className='shadow-2xl p-10 m-4 h-fit w-fit'>
            <h1 className='font-bold'>Login </h1>
            <div className='my-10'>
                <label >Email:</label>
            <input type="email" placeholder='Enter The Email..' required className='border-2' onChange={(e)=>setemail(e.target.value)}/><br/>
            
            </div>
            <div className='my-10'>
                <label >Password</label>
            <input type="password" placeholder='Enter The Password..' required className='border-2' onChange={(e)=>setpassword(e.target.value)}/><br/>
            
            </div>
            <button className='bg-green-500 px-2 rounded cursor-pointer' onClick={handle}>Submit</button>
        </div>
    </div>
  )
}

export default Login