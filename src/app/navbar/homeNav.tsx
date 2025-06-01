import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className=" lg:py-8 py-4 text-white flex justify-between items-center">
            <div className="lg:text-lg text-sm lg:font-bold font-medium">Admission Jockey</div>
            <a href="/login">
                <button className="lg:px-6 lg:py-2 px-4 py-1 lg:rounded-lg rounded-sm font-semibold text-white lg:text-base text-[10px] 
               bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
               border-t border-[#ffffff36] 
               shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
               hover:opacity-90 transition-all duration-300">
                    Login
                </button></a>

        </nav>
    );
};

export default Navbar;