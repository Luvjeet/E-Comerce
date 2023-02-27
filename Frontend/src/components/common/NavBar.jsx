import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";

const NavBar = () => {
  const { authCompleted, username } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-[#121212] h-12 w-full flex absolute">
      <ul className="flex justify-center gap-10 text-white text-xl flex-[0.6]">
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
      <div className="flex items-center justify-center p-2 flex-[0.4]">
        <div className="flex gap-10 items-center ">
          <FaShoppingCart className="text-white text-xl" />
          <h2 className="text-white text-lg uppercase font-semibold p-2">
            {username}
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
