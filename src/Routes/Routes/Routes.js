import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../layout/DashboardLayout"
import Main from "../../layout/Main"
import Categories from "../../Page/Categories/Categories/Categories"
import AllAdmins from "../../Page/Dashboard/AllUsers/AllAdmins"
import AllBuyers from "../../Page/Dashboard/AllUsers/AllBuyers"
import AllSellers from "../../Page/Dashboard/AllUsers/AllSellers"
import AllUsers from "../../Page/Dashboard/AllUsers/AllUsers"
import MyOrder from "../../Page/Dashboard/MyOrder/MyOrder"
import Payment from "../../Page/Dashboard/Payment/Payment"
import SellersArena from "../../Page/Dashboard/SellersArena/SellersArena"
import Home from "../../Page/Home/Home/Home/Home"
import Login from "../../Page/Login/Login/Login"
import SignUp from "../../Page/Login/SignUp/SignUp"
import NotFound404 from "../../Page/Shared/NotFound404/NotFound404"
import AdminRoute from "../AdminRoute/AdminRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import SellerRoute from "../SellerRoute/SellerRoute"
import MyProduct from "../../Page/Dashboard/SellersArena/MyProduct"
import Blogs from "../../Page/Home/Home/Blogs/Blogs"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><Categories></Categories></PrivateRoute>,
                loader: ({ params }) => fetch(`https://book-resale-server-omega.vercel.app/categories/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound404></NotFound404>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/alladmin',
                element: <AdminRoute><AllAdmins></AllAdmins></AdminRoute>
            },
            {
                path: '/dashboard/seller',
                element: <SellerRoute><SellersArena></SellersArena></SellerRoute>
            },
            {
                path: '/dashboard/alladmin',
                element: <SellerRoute><AllAdmins></AllAdmins></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({params}) => fetch(`https://book-resale-server-omega.vercel.app/orders/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound404></NotFound404>
            }
        ]
    }
])