import React from 'react';
import Layout from "./views/Layout";
import { createBrowserRouter} from "react-router-dom"
import { config, buildUrl} from "./config";
import Authentication from './modules/authentication/index';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: config.routes.web.dashboard,
          element: <p>Homepage</p>
        },
      ]
    },
    {
      path: buildUrl(config.routes.web.login),
      element: <Authentication />
    },
    {
      path: '/unauthorized',
      element: <p>Unauthorized</p>
    },
    {
      path: "*",
      element: <p>Not found</p>
    }
  ])
  
  export default router