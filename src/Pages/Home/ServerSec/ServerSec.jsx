import React, {useEffect, useState } from 'react';
import Header from './Header';

const ServerSec = () => {
    const [serverData, setServerData] = useState([]);
    useEffect(() => {
        fetch('Server.json')
            .then((res) => res.json())
            .then((data) => setServerData(data))
    }, []);
    return (
        <div>
            <Header></Header>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-12'>
                {
                    serverData.map(info => (
                        <div key={info?.id} className="card card-compact w-full text-white shadow-xl">
                            <div>
                                <figure>
                                    <img className='md:h-[300px] w-full rounded-md' src={info?.image} alt="" />
                                </figure>
                                <div className='flex justify-end relative bottom-7 right-1'>
                                    <p className='px-3  text-center bg-black w-16 rounded-md'>{info?.time}</p>
                                </div>
                            </div>
                            <div className=" flex justify-between px-3 items-center pb-10">
                                <div className='flex gap-4 items-center'>
                                    <img className='w-12 rounded-full' src={info?.profile} alt="" srcset="" />
                                    <div>
                                        <h2 className="text-[20px]">{info?.title}</h2>
                                        <p className='text-lg text-gray-400'>{info?.server_type}</p>
                                    </div>
                                </div>
                                <div className=" text-white">
                                  <ul className='list-disc space-y-1'>
                                    <li className='h-1'></li>
                                    <li className='h-1'></li>
                                    <li className='h-1'></li>
                                  </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ServerSec;