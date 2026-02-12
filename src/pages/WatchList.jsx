import React, { useContext } from 'react'
import { UseContextApi } from '../Context/UseContextApi'
import { useNavigate } from 'react-router-dom'

const WatchList = () => {
    const {watch,dec,setwatch}=useContext(UseContextApi)
    const navigate=useNavigate()
    const handle=(items)=>{
        
        const find=watch.filter((item)=>item.id!==items)
        setwatch(find)
        dec()


    }
  return (
    < div className='h-screen p-3'>
        <div className='grid grid-cols-2  sm:grid-cols-4 '>
            {watch.length>0?(
                watch.map((items)=>(
              <div key={items.id} className='rounded-2xl p-2 shadow-2xl' onClick={()=>navigate(`/book/${items.id}`)}>
                <div className='flex justify-center'>
                    <img src={items.img} alt="" />
                </div>
                <div>
                    <h1><span className='font-bold'>Title:</span>{items.title}</h1>
                    </div>
                <button className='bg-gray-500 px-2 cursor-pointer rounded' onClick={(e)=>{
                    e.stopPropagation()
                    handle(items.id)
                }}>Remove</button>


              </div>
                ))
            ):(
                <p>Add The Book in WatchList!</p>
            )}
        </div>
    </div>
  )
}

export default WatchList