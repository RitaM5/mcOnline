import React, { useEffect, useState } from 'react';

const Auction = () => {
    const [auctionData, setAuctionData] = useState([]);
    useEffect(() => {
        fetch('sponsor.json')
            .then((res) => res.json())
            .then((data) => setAuctionData(data))
    }, []);
    return (
        <div className='bg-white my-container my-32 font-poppins px-3'>
            <h1 className=' text-3xl pt-4'>Sponsored Server Auction</h1>
            <p className='border-b-2 mt-5 border-gray-400'></p>
            <div className=' space-y-2 mt-10'>
                <p className='text-lg'>
                    This page contains the last year of auctions with theis top 10 bids, For archived purpose, server titles represent the title of the server at the time it was added to the auction.
                </p>
                <h2 className='text-[22px] pt-5'>September 2023</h2>
                <p className='text-gray-400'>
                    <span className='text-gray-500 font-semibold'>Auction Start:</span> August 24, 2023 2:00 PM EDT / <span className='text-gray-500 font-semibold'>Auction End:</span> August 29, 2023 2:00 PM EDT
                </p>
            </div>
            {/* table */}
            <div className='py-8  overflow-x-auto overflow-hidden'>
                <table className="border-collapse border border-slate-400 w-full ...">
                    <thead className='bg-gray-200  text-[20px]'>
                        <tr className=' text-center'>
                            <th className="border border-slate-300 py-1 ...">Rank</th>
                            <th className="border border-slate-300 py-1 ...">Server</th>
                            <th className="border border-slate-300 py-1 ...">Bid(USD)</th>
                            <th className="border border-slate-300 py-1...">Date</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            auctionData.map(item => (
                                <tr className='item?.id text-lg'>
                                    <td className="border text-center border-slate-300 py-1 ...">{item?.id}</td>
                                    <td className="border pl-3 border-slate-300 py-1 ...">{item?.server}</td>
                                    <td className="border text-center border-slate-300 py-1...">{item?.usd}</td>
                                    <td className="border pl-3 border-slate-300 py-1 ...">{item?.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Auction;