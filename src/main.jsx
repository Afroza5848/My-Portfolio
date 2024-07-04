import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './layout/Root';
import Home from './Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
