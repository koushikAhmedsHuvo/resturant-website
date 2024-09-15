import React from 'react';
import loginData from '../../data1.json';
import Logo from '../../assets/logo2.svg';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { leftSection1, rightSection1 } = loginData;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-row bg-white w-full">
        {/* Left Section */}
        <div className="relative w-1/2 bg-gradient-to-br from-blue-500 to-purple-600">
          <img
            src={leftSection1.backgroundImage}
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
              {leftSection1.termsText}{' '}
              <span className="text-primary-color underline">
                <a href={leftSection1.termsLink.url}>
                  {leftSection1.termsLink.text}
                </a>
              </span>
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-1/2 pt-14 px-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {rightSection1.welcomeText}
          </h1>
          <p className="text-gray-600 mb-8">{rightSection1.subText}</p>
          <form action="" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {rightSection1.emailLabel}
              </label>
              <input
                type="text"
                id="email"
                placeholder={rightSection1.emailPlaceholder}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                {rightSection1.passwordLabel}
              </label>
              <input
                type="password"
                id="password"
                placeholder={rightSection1.passwordPlaceholder}
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
                  {rightSection1.rememberMeLabel}
                </label>
              </div>
              <a
                href={rightSection1.forgotPasswordUrl}
                className="text-primary-color hover:underline"
              >
                {rightSection1.forgotPasswordText}
              </a>
            </div>
            <button className="w-full py-3 px-4 bg-primary-color text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              {rightSection1.loginButtonText}
            </button>

            <button className="w-full py-3 px-4 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
              {rightSection1.googleButtonText}
            </button>
            <p className="text-sm text-gray-600 mt-6 text-center">
              {rightSection1.signupText}{' '}
              <Link
                to={rightSection1.signupUrl}
                className="text-blue-600 hover:underline"
              >
                {rightSection1.signupLinkText}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
