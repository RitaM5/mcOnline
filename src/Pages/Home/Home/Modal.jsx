import React from 'react';
import { FaPhone, FaMusic, FaNetworkWired, FaCog } from 'react-icons/fa';
import { BiTable } from 'react-icons/bi';
import { IoMdSend } from 'react-icons/io';
import { MdStar } from 'react-icons/md';
const Modal = () => {
    return (
        <div className='bg-white my-container font-poppins'>
            <div className=' grid grid-cols-1 gap-4 md:flex md:gap-0  rounded-md'>
                <div className='grid grid-cols-3 md:grid-cols-1 lg:grid-cols-1 gap-8 justify-items-center lg:justify-center py-12 lg:w-[150px] items-center'>
                    <div className='hover:bg-gray-300 lg:flex justify-center py-4 px-4 rounded-md'>
                        <BiTable size={32} />
                    </div>
                    <div className='hover:bg-gray-300 lg:flex justify-center py-4 px-4 rounded-md'>
                        <IoMdSend size={32} />
                    </div>
                    <div className='hover:bg-gray-200 lg:flex justify-center py-4 px-4 rounded-md'>
                        <FaPhone size={32} />
                    </div>
                    <div className='hover:bg-gray-300 lg:flex justify-centerr py-4 md:px-6 px-4 rounded-md'>
                        <FaMusic size={32} />
                    </div>
                    <div className='hover:bg-gray-300 lg:flex justify-center py-4 px-4 rounded-md'>
                        <FaNetworkWired size={32} />
                    </div>
                    <div className='hover:bg-gray-300 lg:flex justify-center py-4 px-4 rounded-md'>
                        <FaCog size={32} />
                    </div>
                </div>
                <div className='w-full bg-gray-100'>
                    <div className='px-14 py-1'>
                        <h1>Overview</h1>
                        <h1 className='text-2xl font-semibold my-4'>Hyundai Ioniq</h1>
                        <div className='my-8'>
                            <div className='lg:flex grid gap-4 lg:gap-14'>
                                <div className=' space-y-5 bg-white shadow-lg lg:w-[250px] rounded-xl py-10 px-9'>
                                    <p className='bg-green-500 w-10 rounded-full h-10 flex items-center'>
                                        <MdStar className='mx-auto' size={30} color="white" />
                                    </p>
                                    <h1 className='text-4xl font-semibold'>70%</h1>
                                    <span className='text-gray-500'>battery remaining</span>
                                </div>
                                <div className=' space-y-5 bg-white shadow-lg lg:w-[250px] rounded-xl py-10 px-9'>
                                    <p className='bg-green-300 w-10 rounded-full h-10 flex items-center'>
                                        <MdStar className='mx-auto' size={30} color="white" />
                                    </p>
                                    <h1 className='text-4xl font-semibold'>70%</h1>
                                    <span className='text-gray-500'>battery remaining</span>
                                </div>
                                <div className=' space-y-5 bg-white shadow-lg lg:w-[250px] rounded-xl py-10 px-9'>
                                    <p className='bg-yellow-700 w-10 rounded-full h-10 flex items-center'>
                                        <MdStar className='mx-auto' size={30} color="white" />
                                    </p>
                                    <h1 className='text-4xl font-semibold'>70%</h1>
                                    <span className='text-gray-500'>battery remaining</span>
                                </div>
                            </div>
                        </div>
                        <div className='py-6'>
                            <textarea
                                name="message"
                                placeholder="Server description text"
                                rows="10"
                                className="p-2 bg-transparent border-2 border-gray-300 rounded-md w-full focus:outline-none"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;