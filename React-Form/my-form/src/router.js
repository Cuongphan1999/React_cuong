import { createBrowserRouter } from "react-router-dom";
import { buildUrl, config } from "./config";
import FormExample from "./modules/FormExample";
import Layout from "./views/Layout";
import FormAge from "./modules/FormAge";
import RegisterForm from "./modules/RegisterForm";
import SignUp from "./modules/SignUp";
import ApiClient from "./modules/api-client";
import { Link } from "react-router-dom";
const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
              {
                path: config.routes.web.dashboard,
                element: (
                    <div>
                        <p>Homepage</p>
                        <Link to={config.routes.web.SignUp}>Login</Link>
                    </div>
                ) 

              }
        ]
    },
    {
        path: buildUrl(config.routes.web.FormExample),
        element: <FormExample />
    },
    {
        path: buildUrl(config.routes.web.FormAge),
        element: <FormAge/>
    },
    {
        path: buildUrl(config.routes.web.RegisterForm),
        element: <RegisterForm/>
    },
    {
        path: buildUrl(config.routes.web.SignUp),
        element: <SignUp/>
    },
    {
        path : buildUrl(config.routes.api.ApiClient),
        element: <ApiClient/>
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