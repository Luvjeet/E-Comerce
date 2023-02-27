import React, { useState } from "react";
import { AiOutlineUser, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import Button from "../common/Button";
import { loginUser } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import useToggle from "../../custom/useToggle";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Variables
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useToggle(false);

  // Functions
  const login = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    dispatch(loginUser(data)).then(() => navigate("/"));
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="p-8 text-center shadow-xl rounded-xl">
        <h2 className="text-3xl font-bold mb-6">Log-in to your account</h2>
        <form
          action="POST"
          className="m-2 flex gap-4 flex-col"
          onSubmit={(e) => login(e)}
        >
          <div className="flex text-xl items-center m-2 border-2 border-[#121212] rounded p-2">
            <AiOutlineUser />
            <input
              name="username"
              type="text"
              autoComplete="off"
              className="outline-none ml-2 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] text-xl"
              placeholder="Username"
            />
          </div>
          <div className="flex text-xl items-center m-2 border-2 border-[#121212] rounded p-2">
            <FaLock />
            <input
              name="password"
              type={showPass ? "text" : "password"}
              className="outline-none ml-2 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] text-xl"
              placeholder="Password"
              autoComplete="off"
            />
            <span
              onMouseEnter={() => setShowPass(true)}
              onMouseLeave={() => setShowPass(false)}
              className="cursor-pointer"
            >
              {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
          <Button text="Login" className="p-2 text-lg" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
