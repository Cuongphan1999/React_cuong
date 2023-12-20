import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import AboutUS from './modules/aboutUS';
import ContactUS from './modules/contactUS';
import DictionaryDetail from './modules/DictionaryDetail';
//import Product from './modules/Product';
//import Category from './modules/Category';
import layout from './view/layout';
const router = createBrowserRouter([
   {
    path: '/',
    element: <layout />,
    children: [
        {
            path: '/dictionary-about',
            element: <AboutUS/>
        },
        {
            path: '/dictionary-contact',
            element: <ContactUS/>
        },
        {
            path:'/dictionary/:word/:definition',
            element: <DictionaryDetail/>
    
        }
    ]
   },
    {
        path: '/',
        element: <p>homepage</p>
    },
    {
        path: '/Unauthorized',
        element: <p>Unauthorized</p>

    },
    {
        path: '*',
        element: <p>Not found</p>
    },
    // {
    //     path: '/',
    //     element: <Category/>
    // },
    // {
    //     path: '/product/:categoryID"',
    //     element: <Product/>
        
    // }

])
export default router;
