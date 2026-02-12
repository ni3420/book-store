import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import UseContextProvider from './Context/UseContextProvider'

const App = () => {
  return (
    <div>

      <UseContextProvider>
        <Header/>
      <Outlet/>
      <Footer/>
      </UseContextProvider>
    </div>
  )
}

export default App