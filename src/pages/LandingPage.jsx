import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen max-w-sm mx-auto px-6 py-8 bg-gray-100 relative">
      <div className="absolute bottom-6 left-0 right-0 flex flex-col gap-4 z-10 px-6">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Welcome to PopX
        </h2>
        <p className="text-sm text-gray-500 font-medium max-w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="flex flex-col gap-3 pt-6">
          <Link
            to="/signup"
            className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold text-center py-3 rounded-xl transition-all duration-200"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="bg-violet-200 hover:bg-violet-300 text-violet-800 text-sm font-semibold text-center py-3 rounded-xl transition-all duration-200"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
