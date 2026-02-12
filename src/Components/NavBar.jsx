import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UseContextApi } from '../Context/UseContextApi'

const NavBar = () => {
  const navgate = useNavigate("/")
  const { user, like,setuser,setlike,setwatch } = useContext(UseContextApi)
  const Log_out = () => {
    setuser(null)
    setlike(0)
    setwatch([])

    
  }
  const Login = () => {
    navgate("/login")
  }
  
  return (
    <div>
      <nav className=' text-center bg-black rounded text-white text-xl p-2 sm:flex justify-between '>
        <div className='flex justify-center align-baseline' onClick={()=>navgate(`/`)}>
          <img src={"https://cdn-icons-png.flaticon.com/128/2097/2097055.png"} alt="Book Store" className='w-10 cursor-pointer'/>
        <h1>Book.org</h1>
        </div>
        
        <div className='flex gap-6 text-center justify-center '>
          <NavLink to="/" className={`${(active) => active ? "text-orange-500" : "text-white"}`}>
            Home

          </NavLink>
          <NavLink to="/watchlist" className={`${(active) => active ? "text-orange-500" : "text-white"}`}>
            watchlist <span className='bg-red-500 rounded-full px-1'>{like}</span>

          </NavLink>
          {user ? (
            <button className='bg-red-800 rounded px-2 cursor-pointer' onClick={Log_out}>Log out</button>
          ) : (
            <button className='bg-green-400 rounded px-2 cuesor-pointer' onClick={Login}>Log in</button>
          )}

        </div>


      </nav>
    </div>
  )
}

export default NavBar