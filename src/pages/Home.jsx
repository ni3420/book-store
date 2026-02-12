import React, { useContext } from 'react'
import { UseContextApi } from '../Context/UseContextApi'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const {data}=useContext(UseContextApi)
    const navigate=useNavigate()
    const handle=(items)=>{
        navigate(`book/${items}`)


    }

  return (
    <div >
        <h1 className='text-center text-3xl font-bold m-4'>Popular Books</h1>
    <div className='grid grid-cols-3 sm:grid-cols-4 gap-6'>
        {data.results.map((items)=>(
            <div key={items.id} className='shadow-2xl rounded-2xl cursor-pointer p-2' onClick={()=>handle(`${items.id}`)}>
                <div className='flex justify-center '>
                    <img src={items.formats["image/jpeg"]} alt="" />
                </div>
                <div>
                    <h1><span className='font-bold'>Title:</span>{items.title}</h1>
                </div>

            </div>
        ))}

    </div>
    </div>
  )
}

export default Home