import React, { useEffect, useState } from 'react';

const Comment = () => {
    const [commentData, setCommentData] = useState([]);
    useEffect(() => {
        fetch('comments.json')
            .then((res) => res.json())
            .then((data) => setCommentData(data))
    }, []);
    return (
        <div className=' relative bg-green-500 my-20 items-center grid lg:grid-cols-2 font-poppins lg:h-[600px]'>
            <div className='py-10 lg:py-0'>
                <h1 className='text-7xl font-semibold text-white ml-6'><span>2022</span> <br/> <p className='mt-5'>Impact</p><p className='mt-5'>Report</p></h1>
            </div>
            <div className='pr-5 lg:h-[580px] py-6 lg:py-0'>
                <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-6 rounded-box overflow-y-auto custom-scrollbar-hide px-3">
                    {
                        commentData.map(comment => (
                            <div className="card card-compact py-5 px-3 rounded-lg bg-base-100">
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
            <svg xmlns="http://www.w3.org/2000/svg" className=' absolute bottom-0 h-36' viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,229.3C672,256,768,256,864,256C960,256,1056,256,1152,266.7C1248,277,1344,299,1392,309.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    );
};

export default Comment;
