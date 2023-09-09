import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home/Home'
import Auction from './Pages/SponsorAuction/Auction'
import Upload from './Pages/Upload/Upload'
import Moderation from './Pages/Moderation/Moderation'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/auction',
        element: <Auction/>
      },
      {
        path: '/upload',
        element: <Upload/>
      },
      {
        path: '/moderation',
        element: <Moderation/>
      }
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)

