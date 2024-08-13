import React from 'react';
import Image from '../../assets/loginpage.png';
import Logo from '../../assets/logo2.svg';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-row bg-white w-full">
        {/* Left Section */}
        <div className="relative w-1/2 bg-gradient-to-br from-blue-500 to-purple-600">
          <img
            src={Image}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
          <img
            src={Logo}
            alt="logo"
            className="absolute top-8 left-8 h-16 w-auto"
          />
          <div className="absolute bottom-4 left-4 right-4 text-xl text-black p-2 rounded-lg">
            <p className="leading-tight">
              You agree to ReservQ{' '}
              <span className="text-primary-color underline">
                <a href="http://">Terms of Use & Privacy Policy</a>
              </span>
              . You don't need to consent as a condition of food, or buying any
              other goods or services. Message/data rates may apply.
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-1/2 pt-14 px-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome Back
          </h1>
          <p className="text-gray-600 mb-8">
            Welcome back! Please enter your details.
          </p>
          <form action="" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="hi@example.com"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-primary-color hover:underline">
                Forgot Password?
              </a>
            </div>
            <button className="w-full py-3 px-4 bg-primary-color text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Login in
            </button>

            <button className="w-full py-3 px-4 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
              Continue with Google
            </button>
            <p className="text-sm text-gray-600 mt-6 text-center">
              Don’t have an account?{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up for free
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
