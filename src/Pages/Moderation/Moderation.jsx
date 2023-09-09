import React, { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
const Moderation = () => {
    const [moderationData, setModerationData] = useState([]);
    useEffect(() => {
        fetch('moderation.json')
            .then((res) => res.json())
            .then((data) => setModerationData(data))
    }, []);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <div className='bg-white my-container my-32'>
            <div className='py-8 px-6'>
                <table className="border-collapse border w-full ...">
                    <thead className='bg-green-500 text-white font-semibold text-[26px]'>
                        <tr className=' text-left '>
                            <th className="border pl-3 border-slate-300 py-2 ...">Users</th>
                            <th className="border border-slate-300 py-2 ..."></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            moderationData.map(item => (
                                <tr className='item?.id text-lg'>
                                    <td className="border py-2 text-center border-slate-300 ...">
                                        <img className='w-12 rounded-full ml-3' src={item?.user} alt="" srcset="" />
                                    </td>
                                    <td className="border pl-3 border-slate-300 text-lg font-semibold py-1 ...">{item?.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className=' py-6'>
                <div className='bg-gray-200 mx-6 my-6'>
                    <div className='p-3'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-blue-900 w-16 h-16 rounded-lg flex justify-center items-center'>
                                <img className='' src="https://img.icons8.com/color/45/run-into-women.png" alt="" srcset="" />
                            </div>
                            <p className='inline-flex items-center gap-2 text-[20px] font-semibold'>
                                <span>Sales and Marketing</span> <FaAngleRight /> <span>Monthly Reports ...</span>
                            </p>
                        </div>
                        <div className='flex gap-6 items-center py-10'>
                            <p className='border-b-4 border-blue-800 text-lg'>Channel setting</p>
                            <p className='text-lg'>Analytics</p>
                        </div>
                        <div className='bg-white p-4 md:flex justify-between'>
                            <div>
                                <h1 className='font-semibold inline-flex gap-1 items-center'><IoIosArrowDown/> <span className='text-[20px] '>Permission</span></h1>
                            </div>
                            <div className='p-5 space-y-8'>
                                <p className='text-lg font-semibold'>Set channel moderation preferences</p>
                                <div className='w-full space-y-3'>
                                    <h2 className='text-lg'>Project Location</h2>
                                    <div className='w-full'>
                                        <select
                                            className='p-3 w-52 bg-gray-200 font-semibold rounded-md'
                                            id="selectOption"
                                            value={selectedOption}
                                            onChange={handleSelectChange}
                                        >
                                            <option>On</option>
                                            <option>Off</option>
                                        </select>
                                    </div>
                                    <div className='pt-6 text-lg'>
                                        <p className=' font-semibold'>Who can start a new post?</p>
                                        <div className='my-4 grid space-y-3'>
                                            <div className='inline-flex gap-3 items-center'>
                                                <div className="form-control ">
                                                    <label className="label cursor-pointer">
                                                        <input type="checkbox" className=" bg-green-900  w-5 h-5 rounded-full" />
                                                    </label>
                                                </div>
                                                <p>Everyone can start a new post</p>
                                            </div>
                                            <div className='inline-flex gap-3 items-center'>
                                                <div className="form-control ">
                                                    <label className="label cursor-pointer">
                                                        <input type="checkbox" className=" bg-green-900  w-5 h-5 rounded-full" />
                                                    </label>
                                                </div>
                                                <p>Everyone can start a new post</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moderation;