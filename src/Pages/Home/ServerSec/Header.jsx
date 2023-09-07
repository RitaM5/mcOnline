import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa';
const Header = () => {
    const [open, setOpen] = useState(false);
    const list = [
        'New', 'Gaming', 'Hot', 'Coding', 'Vlogs', 'Sport', 'Gym', 'Unboxing', 'Gaming', 'Hot', 'Coding', 'Vlogs', 'Sport'
    ]
    return (
        <div>
            <div className="w-full font-poppins my-container my-4">
                <nav className=" text-white">
                    <div className="flex md:gap-16 lg:gap-0 gap-0 font-poppins items-center  font-medium justify-between h-20 ">
                        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                            <p className=" relative right-4 px-5 py-2 bg-slate-50 rounded-xl text-black font-semibold">All</p>
                        </div>
                        <ul className=" overflow-x-auto overflow-hidden flex  text-base relative right-6  items-center gap-8 lg:gap-4 font-semibold ">
                            {
                                list.map(item => (
                                    <li className="px-4 py-2 bg-gray-800 rounded-xl ">{item}</li>
                                ))
                            }

                        </ul>
                        <p className=" relative right-2 lg:right-0"><FaAngleRight size={20} /></p>
                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Header;