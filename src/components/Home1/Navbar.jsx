import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDown, HiOutlineSearch, HiX } from 'react-icons/hi';
import { FaRegHeart, FaAngleDown } from 'react-icons/fa6';
import { CiShoppingCart, CiLocationOn } from 'react-icons/ci';
import { IoMenuOutline, IoCallOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import Logo from '../../assets/logo.svg';
import jsonData from '../../data.json';
import '../../css/buttonStyle.css';
import '../../css/buttonStyle1.css';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount } = useContext(CartContext);

  const { logo, menu, buttons, slogan } = jsonData;
  const { dropdownData, sloganText, sloganLink, phoneNumber, email } = slogan;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleDropdown = (index) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleClickOutside = (event) => {
    if (menuVisible && !event.target.closest('.menu-container')) {
      setMenuVisible(false);
    }
    if (
      Object.values(dropdownVisible).some((visible) => visible) &&
      !event.target.closest('.dropdown-container')
    ) {
      setDropdownVisible({});
    }
    if (isOpen && !event.target.closest('.slogan-dropdown')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuVisible, dropdownVisible, isOpen]);

  const toggleSloganDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar-container ${
          isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-heading-color' : ''
        } transition-all duration-500`}
      >
        <div className={`slogan-container ${isScrolled ? 'hidden' : 'block'}`}>
          {/* Slogan Section */}
          <div className="hidden lg:flex items-center justify-center w-full h-14 bg-primary-color transition-all duration-500">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="relative inline-block text-left slogan-dropdown">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full ml-10 px-4 py-2 text-base font-medium text-white"
                  onClick={toggleSloganDropdown}
                >
                  <CiLocationOn className="text-white text-xl mr-2" />
                  {dropdownData.title}
                  <FaAngleDown />
                </button>

                {isOpen && (
                  <div
                    className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 ml-10 w-56 rounded-md shadow-lg bg-gray-800 text-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      {dropdownData.items.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
                          role="menuitem"
                          tabIndex="-1"
                          id={`menu-item-${index}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="text-white ml-15">
                <p className="text-center text-lg">
                  {sloganText}{' '}
                  <a href={sloganLink.url} className="text-white underline">
                    {sloganLink.text}
                  </a>
                </p>
              </div>

              <div className="flex flex-row space-x-2 mr-10 items-center">
                <IoCallOutline className="text-white text-xl" />
                <p className="text-white text-lg ml-2">{phoneNumber}</p>
                <MdOutlineEmail className="text-white text-xl" />
                <p className="text-white text-lg">{email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar Section */}
        <div
          className={`bg-heading-color p-4 flex justify-between items-center relative z-10 max-w-screen transition-all duration-500 ${
            isScrolled ? 'fixed top-0 left-0 right-0' : ''
          }`}
        >
          {/* Left Part - Logo */}
          <div className="flex items-center ml-3">
            <img src={Logo} alt={logo.alt} className="h-12 w-auto ml-2" />
          </div>

          {/* Right Part - Menu Icon */}
          <div className="flex items-center ml-auto mr-3.5 p-2 relative menu-container">
            {/* Menu Icon */}
            <IoMenuOutline
              className="text-gray-500 text-3xl cursor-pointer block md:hidden"
              onClick={toggleMenu}
            />

            {/* Menu Items for Small and Medium Devices */}
            {menuVisible && (
              <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col z-50">
                <div className="flex justify-between items-center px-4 py-3">
                  <span className="text-white text-xl">Menu</span>
                  <HiX
                    className="text-white text-xl cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>
                <ul className="w-full text-left px-4">
                  {menu.map((item, index) => (
                    <li
                      key={index}
                      className="py-4 text-xl cursor-pointer border-b border-gray-700"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Menu for Large Devices */}
          <ul className="hidden md:flex space-x-2 align-middle">
            {menu.map((item, index) => (
              <li
                key={index}
                className="relative dropdown-container"
                onMouseEnter={() => toggleDropdown(index)}
                onMouseLeave={() => toggleDropdown(index)}
              >
                <div className="flex">
                  {/* Non-dropdown menu item */}
                  {!item.dropdown ? (
                    <Link
                      to={item.url}
                      className="text-white p-2 cursor-pointer text-lg relative group"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-color transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ) : (
                    // Dropdown menu item
                    <>
                      <span className="text-white p-2 cursor-pointer text-lg relative group">
                        {item.name}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-color transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <span className="text-white mt-3">
                        {' '}
                        <HiChevronDown />
                      </span>
                    </>
                  )}
                </div>

                {dropdownVisible[index] && item.dropdown && (
                  <div className="absolute top-full left-0 bg-slate-500 text-white py-4 rounded-md w-40 z-20 transition-all duration-300">
                    <ul>
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <li
                          key={dropdownIndex}
                          className="px-4 py-2 relative group"
                          onClick={() => toggleDropdown(index)}
                        >
                          <Link
                            to={dropdownItem.url}
                            className="block text-white"
                          >
                            {dropdownItem.title}
                          </Link>
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-color transition-all duration-300 group-hover:w-full"></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Part for Large Devices */}
          <div className="hidden md:flex items-center ml-auto">
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                className="px-1 py-3 rounded-lg text-lg bg-third-color"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                Search Food
              </span>
              <HiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            </div>
            {/* Heart Icon */}
            <div className="ml-4">
              <div className="bg-grey-scale-700 rounded-full p-4 hover:bg-primary-color">
                <FaRegHeart className="text-white text-xl" />
              </div>
            </div>

            {/* Shopping Cart Icon */}
            <div className="ml-4 relative">
              <Link to="/cart">
                <div className="bg-gray-700 rounded-full p-4 hover:bg-primary-color transition-all duration-300 cursor-pointer">
                  <CiShoppingCart className="text-white text-xl" />
                </div>
                {/* Cart count badge */}
                {getCartCount() > 0 && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </div>

            {/* Buttons */}
            <div className="ml-4">
              {buttons.map((button, index) => (
                <Link key={index} to={button.path}>
                  {' '}
                  {/* Add the Link component */}
                  <button
                    className={`font-semibold py-3 px-3 rounded-lg transition duration-500 ease-in-out ${
                      button.value
                        ? 'btn btn1 bg-red-600 hover:bg-white hover:text-red-600'
                        : 'btn btn2 hover:bg-red-600 hover:border-red-600'
                    }`}
                  >
                    {button.text}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
