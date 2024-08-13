import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { TiMessages } from 'react-icons/ti';
import Contact from '../../assets/contact.png';

const Contact2 = () => {
  return (
    <div className="min-h-screen p-8 bg-grey-scale-50">
      <div className="flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="w-full md:w-2/5 p-8">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Get in Touch with Us with Any Questions
          </h1>
          <div className="space-y-6">
            <div className="flex flex-row justify-around p-4 border bg-white rounded-2xl shadow-sm">
              <div className="text-blue-500 text-6xl mr-4">
                <FiPhoneCall className="mt-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
                <p className="text-gray-700 mb-2">
                  Open a chat or give us a call at:
                </p>
                <p className="text-blue-600 font-medium">+1 707 797 0462</p>
              </div>
            </div>
            <div className="flex flex-row justify-around p-4 border bg-white rounded-2xl shadow-sm">
              <div className="text-blue-500 text-6xl mr-4">
                <TiMessages className="mt-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Send an Email</h2>
                <p className="text-gray-700 mb-2">Reach out to us at:</p>
                <p className="text-blue-600 font-medium">
                  Quomodosoft@gmail.com
                </p>
                <p className="text-blue-600 font-medium">
                  abdur.rohman2003@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-3/5 p-0 bg-cover bg-center ml-5">
          <div className="w-full h-full p-6">
            <form
              className="space-y-6 w-full"
              style={{
                backgroundImage: `url(${Contact})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:w-3/4">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="John"
                  />
                </div>
                <div className="md:w-3/4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-black"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:w-3/4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="md:w-3/4">
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-medium text-black"
                  >
                    Telephone
                  </label>
                  <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="+1 234 567 8901"
                  />
                </div>
              </div>
              <div className="w-3/4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-black"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-1/3 py-3 px-4 bg-blue-500 text-black font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
