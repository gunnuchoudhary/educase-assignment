export default function Login() {
  return (
    <div className="min-h-screen max-w-sm mx-auto px-6 py-10 bg-gray-100 relative">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          Sign in to your PopX Account
        </h2>
        <p className="text-sm text-gray-500 font-medium max-w-[85%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <form className="pt-6 space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-violet-600 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-violet-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
