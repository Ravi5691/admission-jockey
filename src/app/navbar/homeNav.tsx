import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className=" py-8 text-white flex justify-between items-center">
            <div className="text-lg font-bold">Admission Jockey</div>
            <button className="px-6 py-2 rounded-lg font-semibold text-white text-base 
               bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] 
               border-t border-[#ffffff36] 
               shadow-[0_0_11px_0_rgba(160,125,241,0.3)] 
               hover:opacity-90 transition-all duration-300">
                <a href="../Login">Login</a>
            </button>
        </nav>
    );
};

export default Navbar;