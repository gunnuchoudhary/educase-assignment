import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <>
      <div className="h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold w-[60%] text-3xl">
            Create your PopX Account
          </h2>

          <form action="" className="flex flex-col gap-3 my-5">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-purple-600"
              >
                Full Name
              </label>
              <input
                type="email"
                id="name"
                placeholder="Enter full name"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-purple-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                id="phone"
                placeholder="Enter phone number"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-purple-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-sm font-medium text-purple-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-purple-600"
              >
                Company Name
              </label>
              <input
                type="email"
                id="company"
                placeholder="Enter Company"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-purple-600"
              >
                Are you an Agency?
              </label>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="">Yes</label>
                  <input type="radio" name="yes" id="yes" />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="">No</label>
                  <input type="radio" name="yes" id="no" />
                </div>
              </div>
            </div>

            <Link to="/settings">
              <button className="bg-[#7B3FF6] my-3 w-full hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer">
                Create Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
