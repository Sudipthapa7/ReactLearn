import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element : <Layout />,
    children : [
      {
        path:"",
        element:<Home/>
      },
       {
        path:"about",
        element : <About/>
       },
       {
        path:"contact",
        element : <Contact/>
       },
       {
        path:"user/:id",
        element : <User />
       },
       {
        
        path:"Github",
        element : <Github />,
        loader : githubInfoLoader
       }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
