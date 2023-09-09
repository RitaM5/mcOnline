import React, { useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { AiOutlineRobot } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti';
import { AiFillVideoCamera } from 'react-icons/ai';
const Upload = () => {
    const fileInputRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log('Selected File:', selectedFile.name);
        }
    };

    return (
        <div className='bg-gray-300 my-container my-32 font-poppins px-3 py-2'>
            <h1 className='text-3xl pt-2'>Create New</h1>
            <div className='bg-white grid grid-cols-1 gap-4 md:flex md:gap-14 shadow-lg px-2 py-3 my-6 rounded-md'>
                <div className='grid grid-cols-1 justify-center items-center'>
                    <div className='rounded-md flex justify-center items-center hover:shadow-lg text-center hover:shadow-[#800080] w-44 h-32'>
                        <div className=' space-y-1 '>
                            <AiOutlineMail className='mx-auto' size={27} />
                            <p className=' font-semibold'>Email</p>
                        </div>
                    </div>
                    <div className='rounded-md flex justify-center items-center hover:shadow-lg text-center hover:shadow-[#800080] w-44 h-32'>
                        <div className=' space-y-1 '>
                            <IoChatbubblesOutline className='mx-auto' size={30} />
                            <p className=' font-semibold'>Text Message</p>
                        </div>
                    </div>
                    <div className='rounded-md flex justify-center items-center hover:shadow-lg text-center hover:shadow-[#800080] w-44 h-32'>
                        <div className=' space-y-1 '>
                            <TiDocumentText className='mx-auto' size={30} />
                            <p className=' font-semibold'>Document</p>
                        </div>
                    </div>
                    <div className='rounded-md flex justify-center items-center hover:shadow-lg text-center hover:shadow-[#800080] w-44 h-32'>
                        <div className=' space-y-1 '>
                            <AiOutlineRobot className='mx-auto' size={30} />
                            <p className=' font-semibold'>Chat Bot</p>
                        </div>
                    </div>
                    <div className='rounded-md flex justify-center items-center hover:shadow-lg text-center hover:shadow-[#800080] w-44 h-32'>
                        <div className=' space-y-1 '>
                            <AiFillVideoCamera className='mx-auto' size={30} />
                            <p className=' font-semibold'>Video</p>
                        </div>
                    </div>
                </div>
                <div className='py-16 w-full'>
                    <h1 className='text-2xl'>Upload HTML and Images</h1>
                    <div className=' space-y-6 my-5'>
                        <button
                            className="inline-flex gap-2 items-center border px-4 rounded-md py-3 text-[#800080] border-[#800080]"
                            onClick={handleFileUpload}
                        >
                            <p className="bg-[#800080] w-4 rounded-full h-6 text-white">+</p>
                            <span>Add files</span>
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <div className="border-dashed border-2 w-full border-[#800080] p-20 rounded-md text-center">
                            <div className="relative">
                                <textarea
                                    className="absolute top-0 left-0 w-full h-full"
                                    placeholder=" "
                                />
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                    <div className="h-full flex items-center justify-center">
                                        <p>Drag and drop your file here or use the "Add files" button.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' grid md:grid-cols-2 gap-5 my-7'>
                        <div className='w-full space-y-3'>
                            <h2 className='text-lg'>Project Location</h2>
                            <div className='w-full'>
                                <select
                                    className='p-3 w-full border border-gray-300 rounded-md'
                                    id="selectOption"
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                >
                                    <option value="">Select one</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className=' space-y-3'>
                            <h2 className='text-lg'>Communication Name<sub className=' text-sm'>(required)</sub></h2>
                            <input type="text" placeholder="" className="bg-white p-3 w-full border border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div className=' flex gap-2'>
                        <button className=' bg-[#800080] px-4 py-2 text-white text-lg rounded-md'>Create</button>
                        <button className=' border border-[#800080] px-5 py-2 text-lg rounded-md'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upload;