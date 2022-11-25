import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../../Layout/Main';
import Blogs from '../../Blogs/Blogs';
import Home from '../../Home/Home/Home';
import Login from '../../Login/Login';
import Signup from '../../Signup/Signup';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element:<Home></Home>
                },
                {
                    path: '/blogs',
                    element:<Blogs></Blogs>
                },
                {
                    path: '/login',
                    element:<Login></Login>
                },
                {
                    path: '/signup',
                    element:<Signup></Signup>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    );
};

export default Routes;