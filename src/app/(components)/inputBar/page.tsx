"use client";

import React, { useState } from 'react';
import { GrAttachment } from "react-icons/gr";
import { MdOutlineMicNone } from "react-icons/md";

const InputBar: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleUpload = () => {
        console.log('Upload button clicked');
    };

    const handleSend = () => {
        console.log('Send button clicked with input:', inputValue);
        setInputValue('');
    };

    return (
        <div className="bg-gradient-to-b from-[#ffffff0d] border-t border-[#ffffff14] to-[#ffffff04] rounded-lg h-14 px-5 my-4 flex items-center gap-3 ">
            <button onClick={handleUpload} >
                <GrAttachment size={20} color="#fff" />
            </button>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Whats your next discovery?"
                className='text-lg outline-none'
                style={{ flex: 1, padding: '8px', borderRadius: '4px', }}
            />
            
            <button onClick={handleSend} className=' rounded-full  border-t border-[#ffffff3f] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]  p-1' >
                <MdOutlineMicNone size={28} color="#fff" />
            </button>
        </div>
    );
};

export default InputBar;