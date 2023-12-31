import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Page/Home/Home/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to='/dashboard'>My Carts</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>Users</Link></li>
                                <li><Link to='/dashboard/allseller'>Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyer'>Buyers</Link></li>
                                <li><Link to='/dashboard/alladmin'>Admins</Link></li>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/seller'>Add book</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;