import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/icons/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";


const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const navItems = <>
        <li><NavLink className='mr-2' to='/'>Home</NavLink></li>
        {
            user?.email ? <>
            <li><NavLink className='mr-2' to={`/booking/${user?.email}`}>My Bookings</NavLink></li>
            <li onClick={()=>logOut()}><button>LogOut</button></li>
            </>
            :
            <li><NavLink to='/login'>Login</NavLink></li>
        }
        
        
    </>
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 h-28">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Header;