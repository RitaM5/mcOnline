import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { BiBell } from 'react-icons/bi';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="fixed z-50 w-full bg-gray-900 font-poppins">
        <nav className="bg-gray-800 text-white">
          <div className="flex font-poppins items-center font-medium justify-around h-20 ">
            <div className="z-50 p-5 md:w-auto w-full flex justify-between">
              <Link to="/">
                <h1 className="text-3xl font-semibold text-green-500">mcOnline</h1>
              </Link>
              <i className="fas fa-search block lg:hidden mt-2" style={{ color: '#298541', fontSize: '22px' }}></i>
              <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>
            <ul className="md:flex hidden text-base relative right-6  items-center gap-8  font-semibold ">
              <li className=""><NavLinks /></li>
              <li className="">
                <Link to="/Auction" className="py-2 px-3 inline-block">
                  Auction
                </Link>
              </li>
              <li>
                <Link to="/moderation" className="py-2 px-3 inline-block">
                  Moderation
                </Link>
              </li>
              <li>
                <Link to="/upload" className="py-2 px-3 inline-block bg-lime-600 text-white rounded-md">
                  Upload Server
                </Link>
              </li>
              <li>
                <Link to="/" className="py-2 px-3 inline-block ">
                  Profile
                </Link>
              </li>
            </ul>

            <div className="md:block hidden">
              <ul className="md:flex relative left-8 items-center hidden text-base gap-8 lg:gap-2 font-semibold ">
                {/* <li>
                  <i className="fas fa-search mt-2 mr-3" style={{ color: '#298541', fontSize: '18px' }}></i>
                </li> */}
                <li>
                  <Link to="/" className="py-2 px-3 inline-block">
                    <button className="border rounded-full duration-300 hover:bg-[#298541] hover:text-white"><BiBell size={32}/></button>
                  </Link>
                </li>
                <li className="relative right-4">
                  <Link to="/" className="py-2 px-3 inline-block">
                    <img src="
             https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" className="h-9 rounded-full" alt="" srcset="" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-[#102f25] text-white fixed w-full h-[400px] z-10 py-12 top-20 overflow-y-auto bottom-0  pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] font-semibold text-lg "}
        `}
            >
              <li><NavLinks /></li>
              <li>
                <Link to="/auction" className="py-3 px-3 inline-block">
                  Auction
                </Link>
              </li>
              <li>
                <Link to="/moderation" className="py-3 px-3 inline-block">
                  Moderation
                </Link>
              </li>
              <div className="py-3">
                <li>
                  <Link to="/upload" className="py-2 px-3 inline-block bg-lime-600 text-white rounded-md">
                    Upload Server
                  </Link>
                </li>
                <li>
                  <Link to="" className="py-3 px-3 inline-block">
                    Profile
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>

  );
};

export default Navbar;