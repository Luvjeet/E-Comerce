import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";
import { HiBars3BottomLeft } from 'react-icons/hi2'

const NavBar = () => {
  const { authCompleted, username } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState(false)

  const logOutUser = () => {
    dispatch(logout());
  };

  const sidebarToggle = () => {
    setSidebar(!sidebar)
    if (!sidebar) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
  }

  return (
    <nav className="bg-[#121212] h-12 w-full fixed flex justify-between p-2 px-4">
      <div className="flex items-center justify-center">
        <HiBars3BottomLeft className={`${sidebar ? "text-black" : "text-white"} text-2xl z-20`} onClick={() => sidebarToggle()} />
      </div>
      <ul className="hidden md:flex justify-center gap-10 text-white text-xl flex-[0.6]">
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
        {authCompleted ? null : (
          <li className="p-2">
            <NavLink to="/signup">SignUp</NavLink>
          </li>
        )}
      </ul>
      <div className="flex items-center justify-center ">
        <div className="flex gap-10 items-center ">
          <FaShoppingCart className="text-white text-xl" />
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
            <li>Name</li>
            <li>Name</li>
            <li>Name</li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
