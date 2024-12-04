import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/button/index";
import KeyIcon from "@/assets/icons/key-icon";
export default function NotLoggedIn({ setIsLoggedIn }) {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto max-w-sm top-[30%] absolute  py-8 rounded-lg shadow-md">
        <div className="flex justify-center items-center">
          <img
            src="/images/Group.png"
            alt="Believer's Bridge Logo"
            className="h-32 "
          />
        </div>

        <div
          className="bg-primary text-white hover:bg-primary-700 mt-32 -mx-4 rounded-xl   font-medium p-4 focus:outline-none transition  items-center justify-center min-h-[50px]
"
        >
          <p>You are not logged in</p>
          <p className="my-3 font-light text-sm">
            Log in to your account or create one if you don’t have an account
          </p>

          <Link to="/sign-in">
            <Button
              color="white"
              variant="contained"
              className="my-3 rounded-xl"
            >
              <KeyIcon />
              Log in to my account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
