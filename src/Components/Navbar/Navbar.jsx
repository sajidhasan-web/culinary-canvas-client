import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link className="flex items-center" href="#">
              <img
                className="w-auto h-12"
                src="/logo.png"
                alt=""
              />
              <h1 className="text-2xl md:text-3xl font-bold">Culinary<span className="text-[#8B755A]">Canvas</span></h1>
            </Link>
            <div className="flex lg:hidden bg-[#8B755A] rounded-sm p-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                    <IoMenu size={30} />
                ) : (
                  <RxCross2 size={30}/>
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute mt-4 inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#8B755A] dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 font-semibold ">
              <Link
                to={'/'}
                className="border-r-2 border-[#8B755A] px-4 py-2 mx-3 mt-2 text-white lg:text-gray-700 transition-colors duration-300 transform  lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
               Home
              </Link>
              <Link
                to={'/all-foods'}
                className="border-r-2 border-[#8B755A] px-4 py-2 mx-3 mt-2 text-white lg:text-gray-700 transition-colors duration-300 transform  lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                All Foods
              </Link>
              <a
                href="#"
                className=" px-3 py-2 mx-3 mt-2 text-white lg:text-gray-700 transition-colors duration-300 transform  lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Gallery
              </a>
              <a
                href="#"
                className="lg:hidden px-3 py-2 mx-3 mt-2 text-white lg:text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
               My added food items
              </a>
              <a
                href="#"
                className="lg:hidden px-3 py-2 mx-3 mt-2 text-white lg:text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
              Add a food item
              </a>
              <a
                href="#"
                className="lg:hidden px-3 py-2 mx-3 mt-2 text-white lg:text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
              My ordered food items
              </a>
             
             
              
            </div>

            <div className="flex items-center gap-2 mt-4 lg:mt-0">
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                  <div className="relative inline-block">
            {/* Dropdown toggle button */}
            <div onClick={toggleDropdown} className="w-12 h-12 overflow-hidden border-2 border-gray-400 rounded-full cursor-pointer">
                <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                />
            </div>

            {/* Dropdown menu */}
            {isDropdownOpen && (
                <div
                    onClick={() => setIsDropdownOpen(false)}
                    className="hidden lg:block absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                >
                    <Link href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> My added food items </Link>
                    <Link href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Add a food item </Link>
                    <Link href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">  Add a food item </Link>
                </div>
            )}
        </div>


                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  Khatab wedaa
                </h3>
              </button>
              <Link
              to={"/sign-in"}
              >   
              <button className="btn bg-[#8B755A] text-white">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
