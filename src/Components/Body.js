import React from 'react'
import Login from './Login';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Gptsearch from './Gptsearch';




const Body = () => {




    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,

        },
        {
            path: "/browse",
            element: <Browse/>,
            
        },
        {
          path: "/gptsearch",
          element: <Gptsearch />,
          
      },
    ]);
   
  return (
    <div>
       <RouterProvider router = {appRouter} />
    </div>
  )
}

export default Body;