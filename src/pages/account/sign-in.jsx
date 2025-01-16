import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@/components/forms/input";
import BackBtn from "@/components/back-btn";
import Button from "@/components/button/index";
import GoogleIcon from "@/assets/icons/google-icon";
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen text-left">
      <div className="container mx-auto max-w-sm  py-8 rounded-lg shadow-md">
        {/* Logo Section */}
        <div className=" mb-6 flex items-center gap-1">
          <BackBtn />
          <img
            src="/images/logo.png"
            alt="Believer's Bridge Logo"
            className="h-16"
          />
        </div>

        {/* Title */}
        <h2 className=" text-lg font-semibold text-gray-300 mb-4">
          Log in to your Believer's Bridge account.
        </h2>
        <Link
          to="/create-account"
          className=" text-sm text-secondary cursor-pointer"
        >
          Create an account instead
        </Link>

        {/* Login Form */}
        <form className="mt-11">
          <div className="mb-4">
            <Input
              id="username"
              placeholder="Email or username"
              className="text-[13px]"
            />
          </div>

          <div className="mb-4">
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="text-[13px]"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 text-[10px] text-gray-300"
              >
                SHOW
              </button>
            </div>
          </div>

          <p className=" text-sm text-secondary mb-10 cursor-pointer">
            Forgot password?
          </p>

          <Button type="submit" className="w-full">
            Log in to my account
          </Button>
        </form>

        {/* Or Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-600">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <Button color="white" variant="contained" className="w-full ">
          <GoogleIcon />
          Continue with Google
        </Button>
      </div>
    </div>
  );
}
