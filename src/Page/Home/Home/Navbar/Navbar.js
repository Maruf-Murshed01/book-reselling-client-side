import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const menuItems = <>
       
        {user?.uid ?
            <>
                <li><Link className='text-[gray]' to=''>Hi, {user?.displayName}</Link></li>
                <li><Link className='text-[gray]' to='/'>Home</Link></li>
                <li><Link className='text-[gray]' to=''>About</Link></li>
                <li><Link className='text-[gray]' to=''>Contact</Link></li>
                <li><Link className='text-[gray]' to='/dashboard'>Dashboard</Link></li>
                <li><button className='text-[gray]' onClick={handleLogOut}>Sign Out</button></li>
            </>
            :
            <>
                <li><Link className='text-[gray]' to='/'>Home</Link></li>
                <li><Link className='text-[gray]' to=''>About</Link></li>
                <li><Link className='text-[gray]' to='/'>Contact</Link></li>
                <li><Link className='text-[gray]' to='/login'>Login</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl  text-[#149777]">Book Nerds</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <img src="https://i.ibb.co/3cG1sPH/Tech-book-1.png" alt="" className=" w-24 h-24" />
            </div>
        </div>
    );
};

export default Navbar;