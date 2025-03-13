import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "@/components/forms/input";
import BackBtn from "@/components/back-btn";
import Button from "@/components/button/index";
import GoogleIcon from "@/assets/icons/google-icon";
import { loginUser } from "@/api/signinApi";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");
    setSuccessMessage("");

    try {
      const result = await loginUser(data);
      setSuccessMessage("Login Successful!");

      // Save token to localStorage (optional)
      localStorage.setItem("authToken", result.token);

      // Redirect to home page
      navigate("/");
    } catch (error) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-left">
      <div className="container mx-auto max-w-sm py-8 rounded-lg shadow-md">
        {/* Logo Section */}
        <div className="mb-6 flex items-center gap-1">
          <BackBtn />
          <img
            src="/images/logo.png"
            alt="Believer's Bridge Logo"
            className="h-16"
          />
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-300 mb-4">
          Log in to your Believer's Bridge account.
        </h2>
        <Link
          to="/create-account"
          className="text-sm text-secondary cursor-pointer"
        >
          Create an account instead
        </Link>

        {/* Login Form */}
        <form className="mt-11" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Input
              id="username"
              placeholder="Email or username"
              {...register("username", {
                required: "Username or email is required",
              })}
              className="text-[13px]"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                })}
                className="text-[13px]"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 text-[10px] text-gray-300"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          {apiError && <p className="text-red-500 text-sm">{apiError}</p>}
          {successMessage && (
            <p className="text-green-500 text-sm">{successMessage}</p>
          )}

          <p className="text-sm text-secondary mb-10 cursor-pointer">
            Forgot password?
          </p>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Log in to my account"}
          </Button>
        </form>

        {/* Or Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-600">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <Button color="white" variant="contained" className="w-full">
          <GoogleIcon />
          Continue with Google
        </Button>
      </div>
    </div>
  );
}
