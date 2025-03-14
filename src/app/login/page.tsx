"use client";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  toast.success("Login Successful", { toastId: "login-toast" });
};

const Login = () => {
  return (
    /* From Uiverse.io by themrsami */
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form className="flex flex-col">
          <input
            type="email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary-2 transition ease-in-out duration-150"
            placeholder="Email address"
          />
          <input
            type="password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary-2 transition ease-in-out duration-150"
            placeholder="Password"
          />
          <div className="flex items-center justify-between flex-wrap">
            <label
              htmlFor="remember-me"
              className="text-sm text-gray-900 cursor-pointer"
            >
              <input
                type="checkbox"
                id="remember-me"
                className="mr-2 accent-primary-2"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-primary-2 hover:underline mb-0.5"
            >
              Forgot password?
            </a>
          </div>
          <button
            onClick={(e) => loginHandler(e)}
            type="submit"
            className="bg-gradient-to-r bg-secondary-2 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-primary-2 transition ease-in active:scale-95"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
