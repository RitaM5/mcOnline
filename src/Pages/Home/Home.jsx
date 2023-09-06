import React, { useEffect, useState } from 'react';
import IconsData from './IconsData';

const Home = () => {
    const [data, setData] = useState([]);
    const [blog, setBlog] = useState({});
    const [isBiddingOpen, setIsBiddingOpen] = useState(false);

    useEffect(() => {
        fetch('icons.json')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, []);
    const addIconsMark = (id) => {
        if (data) {
            const newBlog = data.find(detail => detail?.id === id)
            setBlog(newBlog);
            setIsBiddingOpen(!isBiddingOpen)
        }
    }
    return (
        <div className='my-container font-poppins'>
            <section className=' grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center bg-black'>
                <div className='bg-black text-white text-center w-full py-20'>
                    <img src={blog?.icon} className='w-[150px] mx-auto' alt="" srcset="" />
                    <div className='my-3 space-y-2 text-lg'>
                        <p className='text-[22px] font-semibold'>{blog?.icon_name}</p>
                        <p><span className=' font-semibold'>IP :</span> {blog?.ip}</p>
                    </div>
                </div>
                <div className='w-full bg-gray-900 text-white text-center py-20 space-y-10'>
                    <h1 className='text-gray-400 relative bottom-14 text-lg font-semibold'>Draft Vector Sketches Exploration</h1>
                    <div className='grid grid-cols-3 items-center gap-4 justify-center justify-items-center'>
                        {
                            data.map(icons => <IconsData addIconsMark={addIconsMark} icons={icons} key={icons?.id}></IconsData>)
                        }
                    </div>
                    <div className='pt-5'>
                        <h2 className='text-2xl font-semibold underline underline-offset-8'>Sponsored Servers</h2>
                        <div className='my-8 space-y-3 text-lg'>                         
                                {isBiddingOpen ? (
                                    <p>Bidding is now Open!</p>
                                ) : (
                                    <p>Bidding is now Close!</p>
                                )}
                            <p>Apply for a Slot</p>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;
