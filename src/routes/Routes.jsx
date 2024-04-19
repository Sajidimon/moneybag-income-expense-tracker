import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../components/pages/home/Home";
import Register from "../components/pages/register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;