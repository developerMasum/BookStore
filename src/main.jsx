import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Books from './components/Books/Books';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      {
        path: 'header',
        element: <Header />
      }


      ,
      {

      path : '/',
      element: <Home />
     
    },
    {
      path: 'books',
      element:<Books> </Books>,
      loader: ()=> fetch('https://api.itbook.store/1.0/new')
    }
    
    ,{
      path:'about',
      element: <About />
    },
  ]
  },
]);












ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
