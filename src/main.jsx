import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UseContextProvider from './Context/UseContextProvider.jsx'
import Book from './pages/Book.jsx'
import Login from './pages/Login.jsx'
import WatchList from './pages/WatchList.jsx'
const router=createBrowserRouter([{
  path:"/",
  element:<UseContextProvider>
    <App/>
  </UseContextProvider>,
  children:[{
    path:"/",
    element:(
    <Home/>

    )
  },{
    path:"book/:id",
    element:(
        <Book/>

    )
  },{
    path:"watchlist",
    element:<WatchList/>
  },{
    path:"login",
    element:<Login/>
  }]


}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
