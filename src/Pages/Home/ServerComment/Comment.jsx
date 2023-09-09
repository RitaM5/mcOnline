import React, { useEffect, useState } from 'react';
import commentData from '../../../../public/comments.json'
const Comment = () => {
    // const [commentData, setCommentData] = useState([]);
    // useEffect(() => {
    //     fetch('comments.json')
    //         .then((res) => res.json())
    //         .then((data) => setCommentData(data))
    // }, []);
    const chunkSize = 3;

const chunkedArrays = [];
for (let i = 0; i < commentData.length; i += chunkSize) {
    chunkedArrays.push(commentData.slice(i, i + chunkSize));
}

const firstChunk = chunkedArrays[0];
const secondChunk = chunkedArrays[1];

console.log(firstChunk);
console.log(secondChunk);

    return (
        <div className=' font-poppins'>
            <h1 className=' text-center text-2xl text-gray-400 font-semibold mt-6'>Server Comment</h1>
            <p className=' border-b-4 border-gray-400 w-52 mx-auto'></p>
            <div className=' relative bg-green-500 my-20 items-center grid lg:grid-cols-2 font-poppins lg:h-[600px]'>
                <div className='py-10 lg:py-0'>
                    <h1 className='text-7xl font-semibold text-white ml-6'><span>2022</span> <br /> <p className='mt-5'>Impact</p><p className='mt-5'>Report</p></h1>
                </div>
                <div className='md:pr-5 lg:h-[580px] py-6 lg:py-0'>
                    <div className='h-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center  rounded-box overflow-y-auto custom-scrollbar-hide px-3'>
                        <div className=' grid grid-cols-1 gap-4'>
                        {
                            firstChunk.map(comment => (
                                <div className="py-5 px-3 rounded-lg bg-white">
                                    <div className='inline-flex gap-2'>
                                        <img src={comment?.image} alt="" srcset="" />
                                        <p className='text-lg font-semibold text-gray-800'>{comment?.name}</p>
                                    </div>
                                    <div className='pt-2 text-gray-600'>
                                        <p>{comment?.comment}</p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                        <div className=' grid grid-cols-1 gap-4'>
                        {
                            secondChunk.map(comment => (
                                <div className="py-5 px-3 rounded-lg bg-white">
                                    <div className='inline-flex gap-2'>
                                        <img src={comment?.image} alt="" srcset="" />
                                        <p className='text-lg font-semibold text-gray-800'>{comment?.name}</p>
                                    </div>
                                    <div className='pt-2 text-gray-600'>
                                        <p>{comment?.comment}</p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className=' absolute bottom-0 h-16 lg:h-36' viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,229.3C672,256,768,256,864,256C960,256,1056,256,1152,266.7C1248,277,1344,299,1392,309.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className='bg-base-300  py-3'>
                <div className='px-4 space-y-2 text-3xl font-semibold'>
                    <h1>Cast Daily Vote for Minecraft Server:</h1>
                    <p>DeadMC - SURVIBE & THRIVE - Towns | Combat | Economy | <br /> Community - 1.20.1</p>
                </div>
                <p className=' px-1 my-3'>
                    You're able to vote once a day for Minecraft Server "DeadMC - SURVIVE & THRIVE - Towns | Combat | Economy - 1.20.1" on Planet Minecraft This United States server has been on PMC since Oct 3rd, 2019 and this month they have 129 votes. Voting for this Minecraft server helps them rise the sssssserver charts on Planet Minecarft. Thanks for helping them grow.
                </p>
                <div className=' space-y-3 md:w-[400px] rounded-md mx-auto  text-center bg-white p-10 my-10'>
                      <h1 className='text-lg font-semibold'>Daily Server Vote</h1>
                      <input type="text" placeholder="Minecraft Name" className="bg-white p-2 border-gray-300 border w-full max-w-xs" />
                      <p>Username is <span className=' font-semibold'>CaSe-SeNsiTive</span></p>
                      <p className=' bg-blue-600 py-2 rounded-md text-white font-semibold'>SUBMIT VOTE!</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;
