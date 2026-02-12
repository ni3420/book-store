import React, { useContext } from 'react'
import { UseContextApi } from '../Context/UseContextApi'
import { useNavigate, useParams } from 'react-router-dom'

const Book = () => {
    const {data,inc,user,setwatch,watch}=useContext(UseContextApi)
    const {id}=useParams()
    
    const navigate=useNavigate()
    const find=data.results.filter((items)=>items.id==id);
    const Related=data.results.filter((items)=>items.bookshelves[0]==find[0].bookshelves[0])
    const handle=(items)=>{
        navigate(`/book/${items}`)
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    const chcek=(items)=>{
        if(user)
        {
            window.location.href=items;
        }else{
            navigate("/")
        }
    }
    const Watch=()=>{
       
        if(user)
        {
             const Watchdata={
                img:find[0].formats["image/jpeg"],
                title:find[0].title,
                id:find[0].id
             }
             if(watch.some((items)=>items.id==find[0].id))
             {
                alert("alreday in watchlist!")
                return
             }
            inc()
            setwatch([...watch,Watchdata])
            
        }
        else{
            navigate("/login")
        }

    }
  return (
    <div className='m-4 p-2'>
        <div className='flex justify-center m-3'>
            <img src={find[0].formats["image/jpeg"]} alt="" />
        </div>
        <div>
            <h1><span className='font-bold'>Title:</span>{find[0].title}</h1>
            <h1><span className='font-bold'>Authors:</span>{find[0].authors[0].name}</h1>
            <p className='font-bold'>About The Book:-</p>
            <p>{find[0].summaries[0]}</p>
        </div>
        {/*Buttons*/}
        <div className='grid grid-cols-2  sm:grid-cols-2 gap-6 h-10 m-4  '>
            <button className='bg-green-400 px-2 w-full rounded cursor-pointer'onClick={Watch}>WatchList</button>
            <button className='bg-gray-400 px-2 w-full rounded cursor-pointer'onClick={()=>chcek(`${find[0].formats["text/html"]}`)}>Read The Book</button>

        </div>
        {/*Related Book*/}
            <h1 className='text-3xl font-bold my-3'>Related Book</h1>

        <div className='grid grid-cols-2 gap-6 rounded-2xl sm:grid-cols-4' >

             {Related.length>0?(
                Related.map((items)=>(
                    <div key={items.id} className='shadow-2xl p-2 rounded' onClick={()=>handle(items.id)} >

                        <div className='flex justify-center p-2'>
                            <img src={items.formats["image/jpeg"]} alt="" />
                        </div>
                        <div>
                        <h1><span className='font-bold'>Title:</span>{items.title}</h1>

                        </div>
                    </div>

                ))
            ):(
                <p>Not Available Books</p>
            )} 
        </div>

    </div>
  )
}

export default Book