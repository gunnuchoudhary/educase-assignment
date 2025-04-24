import React from "react";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

export default function Setting() {
  return (
    <div className="min-h-screen max-w-sm mx-auto px-6 py-8 bg-gray-100">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Account Settings</h2>
        <Link
          to="/"
          className="text-sm text-violet-600 font-semibold hover:underline"
        >
          Back
        </Link>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 rounded-full bg-gray-300 overflow-hidden">
            <div className="absolute -bottom-1 -right-1 bg-violet-600 text-white rounded-full h-7 w-7 flex items-center justify-center shadow-md cursor-pointer">
              <FaCamera size={14} />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">Marry Doe</h3>
            <span className="text-sm text-gray-500 font-medium hover:underline cursor-pointer">
              Marry@gmail.com
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 font-medium leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolores
          numquam, voluptas omnis voluptate voluptates ipsum dolor sit.
        </p>
      </div>
    </div>
  );
}
