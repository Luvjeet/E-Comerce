import { useState, useEffect } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import { logout } from "../../store/slices/authSlice"
import { clearCart } from "../../store/slices/cartSlice"
import { HiBars3BottomLeft } from 'react-icons/hi2'

const NavBar = () => {
    const { authCompleted, username } = useSelector((state) => state?.auth);
    const cart = useSelector((state) => state?.cart)
    const dispatch = useDispatch();
    const [sidebar, setSidebar] = useState(false)

    const logOutUser = () => {
        dispatch(clearCart())
        dispatch(logout());
    };

    const sidebarToggle = () => {
        setSidebar(!sidebar)
        if (!sidebar) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "unset"
    }

    return (
        <nav className="bg-[#121212] h-12 w-full flex justify-between p-2 px-4">
            <div className="flex items-center justify-center md:hidden">
                <HiBars3BottomLeft className={`${sidebar ? "text-black" : "text-white"} text-2xl z-20`} onClick={() => sidebarToggle()} />
            </div>
            <ul className="hidden md:flex justify-center items-center gap-20 text-white text-xl">
                <li className="p-2">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="p-2">
                    {authCompleted ? (
                        <NavLink onClick={logOutUser}>LogOut</NavLink>
                    ) : (
                        <NavLink to="/login">Login</NavLink>
                    )}
                </li>
                {/*
          ----- TO DO IMPLEMENT SIGNUP -----
          {authCompleted ? null : (
            <li className="p-2">
             <NavLink to="/signup">SignUp</NavLink>
            </li>
        )}
        */}
            </ul>
            <div className="flex items-center justify-center ">
                <div className="flex gap-10 items-center ">
                    <div data-count={cart.totalItems ? `${cart.totalItems}` : "0"}
                        className={`text-white text-xl relative before:content-[attr(data-count)] before:absolute before:-top-2 before:-right-3  before:w-[16px] before:h-[16px] before:flex before:justify-center before:items-center before:rounded-[50%] before:bg-red-500 before:text-white before:text-xs`} >
                        <Link to="/checkout">
                            <FaShoppingCart />
                        </Link>
                    </div>
                    {authCompleted ? (
                        <h2 className="text-white text-lg uppercase font-semibold p-2">
                            {username}
                        </h2>
                    ) : null}
                </div>
            </div>
            {sidebar ? (
                <div className="h-screen w-full overflow-hidden fixed left-0 top-0 bg-red-500 flex items-center justify-center">
                    <ul className="text-white">
                        <li className="p-2" onClick={() => sidebarToggle()}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="p-2" onClick={() => sidebarToggle()}>
                            {authCompleted ? (
                                <NavLink onClick={logOutUser}>LogOut</NavLink>
                            ) : (
                                <NavLink to="/login">Login</NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            ) : null}
        </nav>
    );
};

export default NavBar;
