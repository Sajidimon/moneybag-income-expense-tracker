import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../components/pages/home/Home";
import Register from "../components/pages/register/Register";
import Login from '../components/pages/login/Login'
import Dashboard from "../components/pages/dashboard/Dashboard";
import Incomelist from "../components/pages/dashboard/incomelist/Incomelist";
import Expenselist from "../components/pages/dashboard/expenselist/Expenselist";


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
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    },
    {
        path: '/dashboard/incomelist',
        element: <Incomelist></Incomelist>
    },
    {
        path: '/dashboard/expenselist',
        element: <Expenselist></Expenselist>
    }
])

export default router;