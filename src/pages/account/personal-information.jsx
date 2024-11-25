import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@/components/forms/input";
import BackBtn from "@/components/back-btn";
import Button from "@/components/button/index";

export default function Account() {
  const [inputType, setInputType] = useState("text");

  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="min-h-screen text-left">
      <div className="container mx-auto max-w-sm  py-8 rounded-lg shadow-md">
        {/* Logo Section */}
        <div className=" mb-6 flex items-center gap-1">
          <BackBtn />
          <img
            src="public/images/logo.png"
            alt="Believer's Bridge Logo"
            className="h-16"
          />
        </div>

        {/* Title */}
        <h2 className=" text-lg font-semibold text-gray-300 mb-4">
          Fill in your personal information to complete your account setup
        </h2>

        {/* personal information */}
        <form className="mt-11">
          <div className="mb-4">
            <Input
              id="first-name"
              placeholder="First name"
              className="text-[13px]"
            />
          </div>
          <div className="mb-4">
            <Input
              id="lastname"
              placeholder="Lastname"
              className="text-[13px]"
            />
          </div>
          <div className="mb-4">
            <Input
              id="username"
              placeholder="Username"
              className="text-[13px]"
            />
          </div>
          <div className="mb-4">
            <Input
              id="birthday"
              type={inputType}
              placeholder="Birthday"
              onFocus={() => setInputType("date")}
              //   onBlur={() => setInputType("text")}
              className="text-[13px]"
            />
          </div>

          <div className="mb-4">
            <Input
              id="phone-number"
              placeholder="Phone number"
              type="number"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="text-[13px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
            />
            {isFocused && (
              <p className=" text-sm text-secondary mb-10 cursor-pointer">
                Enter your phone number, starting with the country code.
              </p>
            )}
          </div>

          <Button type="submit" className="w-full mt-10">
            Complete setup
          </Button>
        </form>
      </div>
    </div>
  );
}
