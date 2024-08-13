import React from 'react';
import About from '../../assets/about.png';
import Men1 from '../../assets/men1.png';
import Men2 from '../../assets/men2.png';
import Button from '../../assets/Button.png';

const About2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-lg space-y-8 md:space-y-0 md:space-x-8 ">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2 mt-10">
        <img
          src={About}
          alt="About"
          className="w-full h-auto rounded-lg shadow-md"
        />

        {/* Spinning Button with Years */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src={Button}
            alt="Button"
            className="w-24 h-24 animate-spin-slow" // Add the spinning animation
          />
          <div className="absolute flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">50</h1>
            <p className="text-lg text-white">Years</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 text-gray-800 ">
        <h1 className="text-5xl font-bold mb-4 ml-10">
          Our Story of Culinary Excellence at ReservQ
        </h1>
        <p className="text-lg mb-4 ml-10">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="text-lg mb-14 ml-10 ">
          Over 20 years’ experience providing top quality booking and service
          for your Amazing Dream & Make you Happy.
        </p>

        {/* Team Stats */}
        <div className="flex flex-row space-x-8">
          <div className="flex flex-col items-center">
            <img
              src={Men1}
              alt="Men1"
              className="w-20 h-20 rounded-full shadow-md"
            />
            <p className="text-xl font-semibold mt-4 ">90k+ Customers</p>
            <p className="text-gray-600 ml-12">Believe in our service & care</p>
          </div>
          <div className="flex flex-col items-center ml-10">
            <img
              src={Men2}
              alt="Men2"
              className="w-20 h-20 rounded-full shadow-md"
            />
            <p className="text-xl font-semibold mt-4  ">100+ Branches</p>
            <p className="text-gray-600 ml-12">Food ready for occupancy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
