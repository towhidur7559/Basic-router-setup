import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/Home/Home.jsx'
import Root from './component/Root/Root.jsx';
import LogIn from './component/LogIn/LogIn.jsx';
import Register from './component/Register/Register.jsx';
import AuthProvider from './component/AuthProvider/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [{
      path: '/',
      element: <Home>
        {/* <InsideHome></InsideHome> */}
      </Home>
    },
    {
      path: '/login',
      element: <LogIn></LogIn>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
