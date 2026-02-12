import React from 'react'

const Footer = () => {
  return (
    <div className=''>
        <footer className='w-full p-2  text-white bg-black '>
            <div className='grid grid-cols-1 p-2 sm:grid-cols-3 '>
                <div>
                    <img src={"https://cdn-icons-png.flaticon.com/128/2097/2097055.png"} alt="Logo" className='w-10' />
                    <h1>Book Store</h1>
                </div>
                <div className=' mt-5 sm:mt-0'>
                    <label>Email</label><br/>
                    <input type="email" placeholder='enter your email..' className='bg-white border-2 ' />
                    <button className='bg-blue-800 px-2 rounded cursor-pointer'>Submit</button>

                </div>
                <div className=' mt-5 sm:mt-0'>
                    <ul className='flex gap-4 cursor-pointer'>
                        <li>
                            <img src={"https://cdn-icons-png.flaticon.com/128/2504/2504903.png"} alt="facebook" className='w-10 cursor-pointer'/>
                            <h1>facebook</h1>
                        </li>
                        <li>
                            <img src={"https://cdn-icons-png.flaticon.com/128/174/174857.png"} alt="Linkdin" className='w-10'/>
                            <h1>Linkdin</h1>
                        </li>
                       
                        <li>
                            <img src={"https://cdn-icons-png.flaticon.com/128/15707/15707749.png"} alt="instgram" className='w-10' />
                            <h1>instgram</h1>
                        </li>
                    </ul>
                </div>

            </div>

        </footer>
            <h1 className='text-center'>2026@copyright</h1>

    </div>
  )
}

export default Footer